#!/bin/bash

# iOS Build Script Wrapper
# This script ensures that build scripts run with proper bash environment
# and don't load Oh My Zsh configurations that can cause conflicts

# Ensure we're using bash
export SHELL=/bin/bash

# Prevent Oh My Zsh from being loaded
unset ZSH
unset ZSH_CUSTOM
unset ZSH_THEME

# Clear any problematic environment variables
unset BASH_ENV

# Set proper locale
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8

# Ensure node is found correctly
export NODE_BINARY=$(/bin/bash -c 'command -v node')

# Run the actual build command with clean environment
echo "🔧 Starting iOS build with clean bash environment..."
exec /bin/bash -c "$@"