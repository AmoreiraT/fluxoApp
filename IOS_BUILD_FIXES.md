# iOS Build Shell Configuration Fixes

## Problem
The iOS build was failing with the following errors:
- `Error: Oh My Zsh can't be loaded from: bash. You need to run zsh instead.`
- `env: bash: No such file or directory`
- Build script failures for expo-constants and expo-updates

## Root Cause
The build scripts were encountering shell conflicts when:
1. User's default shell is zsh with Oh My Zsh configured
2. Build scripts expect bash but encounter zsh configurations
3. Shell environment variables were not properly isolated for builds

## Solutions Implemented

### 1. Enhanced .xcode.env Configuration
**File:** `ios/.xcode.env`

Added explicit shell configuration:
```bash
# Ensure we use bash and avoid zsh/Oh My Zsh conflicts
export SHELL=/bin/bash
export NODE_BINARY=$(command -v node)

# Disable Oh My Zsh to prevent shell conflicts during builds
unset ZSH
unset ZSH_THEME
```

### 2. Local Environment Override
**File:** `ios/.xcode.env.local` (not committed to git)

Provides additional local overrides:
```bash
# Force bash shell usage for all build scripts
export SHELL=/bin/bash

# Ensure clean environment without zsh configurations
unset ZSH
unset ZSH_THEME
unset OH_MY_ZSH

# Make sure we have the correct node path
export NODE_BINARY=$(command -v node)

# Set NODE_ENV if not already set to prevent warnings
export NODE_ENV=${NODE_ENV:-development}
```

### 3. Updated Firebase Setup Script
**File:** `setup_firebase_fluxo.sh`

- Changed shebang from `#!/bin/bash` to `#!/usr/bin/env bash`
- Added `set -eo pipefail` for better error handling
- Fixed exit code to return 1 instead of undefined

### 4. Fixed app.json Configuration
**File:** `app.json`

Removed problematic hardcoded environment variable reference:
```json
// Removed this problematic line:
"apiUrl": "process.env.EXPO_PUBLIC_API_URL"
```

Environment variables should be accessed properly in code using `Constants.expoConfig.extra` or `process.env.EXPO_PUBLIC_API_URL`.

### 5. Updated .gitignore
Added `ios/.xcode.env.local` to prevent committing machine-specific configurations.

## Testing
Two test scripts were created to verify the fixes:

1. **test-ios-env.sh** - Tests basic iOS environment configuration
2. **test-expo-scripts.sh** - Tests expo build scripts specifically

Both scripts pass successfully, confirming that:
- Shell environment is properly configured
- Node.js is accessible
- Oh My Zsh variables are properly unset
- Expo build scripts can execute without shell conflicts

## Usage Instructions

### For Developers
1. The `.xcode.env` file should work for most scenarios
2. If you have specific local requirements, create `ios/.xcode.env.local` with your overrides
3. The `.xcode.env.local` file will not be committed to git

### For Build Systems
1. Ensure bash is available at `/bin/bash` or `/usr/bin/bash`
2. The build will automatically source both `.xcode.env` and `.xcode.env.local` if present
3. All Expo build scripts will use the configured environment

## Impact
These changes resolve the iOS build issues by:
- Eliminating shell conflicts between bash and zsh
- Providing clean environment for build scripts
- Maintaining backward compatibility
- Being non-intrusive to the existing codebase

The fixes are minimal and surgical, addressing only the shell configuration issues without modifying the core application logic.