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
## 📂 Source Code Structure

The `src` directory contains the main application code organized as follows:

```
src/
├── components/            # Reusable UI components
│   ├── common/           # Shared components across the app
│   │   ├── buttons/      # Button components
│   │   ├── forms/        # Form-related components
│   │   ├── layout/       # Layout components
│   │   └── typography/   # Text and typography components
│   └── specific/         # Feature-specific components
│
├── screens/              # Screen components
│   ├── auth/            # Authentication screens
│   ├── home/            # Home screen and related screens
│   ├── profile/         # User profile screens
│   └── settings/        # Application settings screens
│
├── navigation/           # Navigation configuration
│   ├── stacks/          # Stack navigators
│   ├── tabs/            # Tab navigators
│   └── NavigationConfig.ts  # Main navigation configuration
│
├── services/            # API and external services
│   ├── api/            # API clients and endpoints
│   ├── auth/           # Authentication services
│   └── storage/        # Local storage services
│
├── core/               # Core business logic
│   ├── hooks/         # Custom React hooks
│   ├── context/       # React Context providers
│   └── utils/         # Utility functions
│
├── assets/            # Static assets
│   ├── images/        # Image files
│   ├── fonts/         # Custom fonts
│   └── icons/         # Icon assets
│
├── constants/         # Application constants
│   ├── theme.ts      # Theme configuration
│   ├── config.ts     # App configuration
│   └── api.ts        # API endpoints
│
├── types/            # TypeScript type definitions
│   ├── models/       # Data models
│   └── api/          # API types
│
└── App.tsx           # Application entry point
```

### 🔍 Key Directories

#### `components/`
Contains all reusable UI components. Divided into:
- `common/`: Shared components used across multiple features
- `specific/`: Components tied to specific features

#### `screens/`
Contains the main screen components that represent full pages in the app:
- `auth/`: Login, registration, and password recovery screens
- `home/`: Main application screens
- `profile/`: User profile related screens
- `settings/`: Application settings screens

#### `navigation/`
Handles all navigation-related configuration:
- `stacks/`: Stack navigator configurations
- `tabs/`: Tab navigator configurations
- `NavigationConfig.ts`: Main navigation setup

#### `services/`
Contains all external service integrations:
- `api/`: API client configuration and endpoints
- `auth/`: Authentication service integration
- `storage/`: Local storage utilities

#### `core/`
Contains the core business logic:
- `hooks/`: Custom React hooks
- `context/`: React Context providers
- `utils/`: Helper functions and utilities

### 📝 Coding Standards

- Components follow a consistent file structure
- Each component has its own directory with:
  - Component file (`.tsx`)
  - Styles file (`.styles.ts`)
  - Tests file (`.test.tsx`)
  - Index file for exports

### 🔨 Development Guidelines

1. Place new components in appropriate directories based on their usage
2. Follow the established file naming conventions
3. Create proper type definitions in the `types` directory
4. Maintain separation of concerns between components, services, and business logic
