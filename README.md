<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">fluxoapp</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

## 🔧 iOS Build Configuration

This project includes fixes for iOS build shell compatibility issues. If you encounter errors like:
- `Error: Oh My Zsh can't be loaded from: bash. You need to run zsh instead.`
- `env: bash: No such file or directory`

The project is already configured with the following fixes:

### Shell Environment Configuration
- `ios/.xcode.env` - Properly configured shell environment
- `ios/.xcode.env.local` - Local overrides (create if needed)
- `scripts/ios-build-wrapper.sh` - Build wrapper script

### Build Commands
```bash
# Clean iOS build
npm run ios:clean

# Build iOS project
npm run ios:build

# Standard Expo commands
npm run ios
expo run:ios
```

For detailed information about the iOS build fixes, see [docs/ios-build-fix.md](docs/ios-build-fix.md).

---
## 📂 Source Code Structure

The `src` directory contains the main application code organized as follows:

```
src/
├── @types
│   ├── environment.d.ts
│   └── theme.d.ts
├── core
│   ├── domain
│   │   ├── command
│   │   │   ├── Command.ts
│   │   │   └── useCreateCommand.ts
│   │   ├── repository
│   │   │   ├── IRepository.ts
│   │   │   └── useCreateRepository.tsx
│   │   └── store
│   │       ├── ObservableStore.ts
│   │       └── StoreFactory.ts
│   ├── error
│   │   ├── api.ts
│   │   ├── index.ts
│   │   ├── status.ts
│   │   ├── timeout.ts
│   │   └── unknown.ts
│   ├── infrastructure
│   │   └── http
│   │       ├── protocols
│   │       │   ├── index.ts
│   │       │   ├── method.ts
│   │       │   ├── request.ts
│   │       │   ├── response.ts
│   │       │   ├── status-code.ts
│   │       │   └── url.ts
│   │       ├── queryClient.ts
│   │       ├── useFocusManager.ts
│   │       ├── useHttpClient.ts
│   │       └── useOnlineManager.ts
│   └── model
│       └── baseTypes.ts
├── features
│   └── auth
│       ├── domain
│       │   ├── entities
│       │   │   └── User.ts
│       │   ├── repositories
│       │   │   └── AuthRepository.ts
│       │   └── usecases
│       │       └── LoginUseCase.ts
│       ├── hooks
│       │   ├── useAuth.ts
│       │   └── useAuthRepository.ts
│       ├── infrastructure
│       │   └── repositories
│       │       └── AuthRepositoryImpl.ts
│       └── presentation
│           ├── components
│           └── screens
│               └── LoginScreen.tsx
├── shared
│   └── components
│       ├── InputField.tsx
│       └── NeumorphicButton.tsx
└── themes
    ├── darkTheme.ts
    ├── index.ts
    ├── lightTheme.ts
    ├── shadows.ts
    ├── themeConfig.ts
    ├── themeProvider.tsx
    └── typography.ts
```
