# iOS Build Shell Compatibility Fix

## Problem
The iOS build was failing with the following errors:
- `Error: Oh My Zsh can't be loaded from: bash. You need to run zsh instead.`
- `env: bash: No such file or directory`
- Scripts failing: `[CP-User] Generate app.config for prebuilt Constants.manifest` and `[CP-User] Generate updates resources for expo-updates`

## Root Cause
The issue was caused by shell compatibility conflicts where:
1. Build scripts were trying to execute in bash but loading zsh/Oh My Zsh configurations
2. Environment variables and shell paths were not properly configured
3. The `app.json` configuration had issues with environment variable resolution

## Solutions Implemented

### 1. Fixed Shell Environment Configuration
- **Modified `ios/.xcode.env`**: Added explicit bash shell configuration and prevented Oh My Zsh from loading
- **Created `ios/.xcode.env.local`**: Added local overrides to ensure clean bash environment
- **Environment variables**: Properly configured NODE_BINARY and shell paths

### 2. Updated App Configuration
- **Replaced SVG icons with PNG**: Fixed prebuild issues with SVG assets
- **Created `app.config.js`**: Replaced `app.json` to properly handle environment variables
- **Fixed API URL configuration**: Properly resolved `EXPO_PUBLIC_API_URL` environment variable

### 3. Added Build Scripts and Wrappers
- **Created `scripts/ios-build-wrapper.sh`**: Bash wrapper script to ensure clean shell environment
- **Added npm scripts**: Added `ios:clean` and `ios:build` scripts with proper shell configuration

### 4. Updated Package Configuration
- **Fixed dependencies**: Updated to compatible Expo SDK versions
- **Added build scripts**: Enhanced package.json with additional iOS build commands

## Files Modified

1. `ios/.xcode.env` - Shell environment configuration
2. `ios/.xcode.env.local` - Local shell overrides (not versioned)
3. `app.config.js` - New Expo configuration file (replaces app.json for environment variables)
4. `app.json` - Updated icon paths to use PNG instead of SVG
5. `package.json` - Added iOS build scripts and updated dependencies
6. `scripts/ios-build-wrapper.sh` - New bash wrapper script

## Testing
To test the fix:

1. **Prebuild**: `npx expo prebuild --platform ios --clean`
2. **Install dependencies**: `npx pod-install ios` (on macOS)
3. **Build**: `npm run ios:build` or `expo run:ios`

## Prevention
This fix prevents future shell compatibility issues by:
- Explicitly setting shell environment to bash
- Preventing Oh My Zsh configurations from loading during build
- Providing clear environment variable resolution
- Using PNG assets instead of SVG for better compatibility