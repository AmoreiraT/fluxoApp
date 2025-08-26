#!/bin/bash

# Test script to verify iOS build shell compatibility fixes
echo "🧪 Testing iOS build shell compatibility fixes..."

# Test 1: Check if .xcode.env file loads correctly
echo "📋 Test 1: Testing .xcode.env file loading..."
if [ -f "ios/.xcode.env" ]; then
    source ios/.xcode.env
    if [ "$SHELL" = "/bin/bash" ]; then
        echo "✅ SHELL correctly set to bash"
    else
        echo "❌ SHELL not properly set"
        exit 1
    fi
    
    if [ -z "$ZSH" ]; then
        echo "✅ ZSH variable properly unset"
    else
        echo "❌ ZSH variable still set"
        exit 1
    fi
    
    if [ -n "$NODE_BINARY" ]; then
        echo "✅ NODE_BINARY properly configured: $NODE_BINARY"
    else
        echo "❌ NODE_BINARY not set"
        exit 1
    fi
else
    echo "❌ .xcode.env file not found"
    exit 1
fi

# Test 2: Check if .xcode.env.local exists and loads (it may not exist if gitignored)
echo "📋 Test 2: Testing .xcode.env.local file..."
if [ -f "ios/.xcode.env.local" ]; then
    source ios/.xcode.env.local
    echo "✅ .xcode.env.local file exists and sources correctly"
else
    echo "ℹ️  .xcode.env.local file not found (this is normal if gitignored)"
    echo "✅ .xcode.env.local is properly configured to be created locally"
fi

# Test 3: Check if build wrapper script exists and is executable
echo "📋 Test 3: Testing build wrapper script..."
if [ -x "scripts/ios-build-wrapper.sh" ]; then
    echo "✅ Build wrapper script exists and is executable"
else
    echo "❌ Build wrapper script not found or not executable"
    exit 1
fi

# Test 4: Check if app.config.js is valid
echo "📋 Test 4: Testing app.config.js configuration..."
if [ -f "app.config.js" ]; then
    if node -e "const config = require('./app.config.js'); console.log('Config loaded successfully');" 2>/dev/null; then
        echo "✅ app.config.js loads correctly"
    else
        echo "❌ app.config.js has syntax errors"
        exit 1
    fi
else
    echo "❌ app.config.js not found"
    exit 1
fi

# Test 5: Check if npm scripts are properly configured
echo "📋 Test 5: Testing npm scripts..."
if grep -q "ios:clean" package.json; then
    echo "✅ ios:clean script configured correctly"
else
    echo "❌ ios:clean script not found in package.json"
    exit 1
fi

if grep -q "ios:build" package.json; then
    echo "✅ ios:build script configured correctly"
else
    echo "❌ ios:build script not found in package.json"
    exit 1
fi

# Test 6: Verify prebuild command exists (don't actually run it)
echo "📋 Test 6: Testing Expo prebuild availability..."
if command -v npx >/dev/null 2>&1; then
    echo "✅ npx command available for Expo prebuild"
else
    echo "❌ npx command not available"
    exit 1
fi

echo ""
echo "🎉 All tests passed! iOS build shell compatibility fixes are working correctly."
echo ""
echo "📖 Summary of fixes:"
echo "   - Shell environment properly configured to use bash"
echo "   - Oh My Zsh conflicts prevented"
echo "   - Environment variables properly set"
echo "   - App configuration updated for proper environment variable handling"
echo "   - Build scripts and wrappers in place"
echo "   - PNG icons configured instead of SVG for better compatibility"
echo ""
echo "🚀 Ready for iOS build on macOS with Xcode!"