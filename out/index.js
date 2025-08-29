"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expo_1 = require("expo");
const App_1 = require("./App");
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
(0, expo_1.registerRootComponent)(App_1.App);
