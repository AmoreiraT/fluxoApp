"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.app = void 0;
const async_storage_1 = require("@react-native-async-storage/async-storage");
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth");
const react_native_1 = require("firebase/auth/react-native");
const firebaseConfig = {
    apiKey: "AIzaSyB1I9UNydrnxXrXmqzJx60ZWcngxV3MOW0",
    authDomain: "fluxo-docs.firebaseapp.com",
    projectId: "fluxo-docs",
    storageBucket: "fluxo-docs.firebasestorage.app",
    messagingSenderId: "817465462229",
    appId: "1:817465462229:web:adf91c5270c0fdb2a5c15c",
    measurementId: "G-ZNVM3HQM45"
};
// Initialize Firebase
const app = (0, app_1.initializeApp)(firebaseConfig);
exports.app = app;
const auth = (0, auth_1.initializeAuth)(app, {
    persistence: (0, react_native_1.getReactNativePersistence)(async_storage_1.default),
});
exports.auth = auth;
