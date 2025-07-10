import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";

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
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
});

export { app, auth };


