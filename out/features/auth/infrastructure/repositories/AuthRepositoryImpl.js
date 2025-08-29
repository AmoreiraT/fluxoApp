"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepositoryImpl = void 0;
const auth_1 = require("@react-native-firebase/auth");
const firebase_config_1 = require("../../../../../firebase_config");
class AuthRepositoryImpl {
    constructor() {
        this.confirmationResult = null;
    }
    async fetch(params) {
        throw new Error('Not implemented.');
    }
    async sendSmsCode(phone) {
        this.confirmationResult = await (0, auth_1.signInWithPhoneNumber)(firebase_config_1.auth, phone);
    }
    async loginWithPhone(phone, code) {
        if (!this.confirmationResult) {
            throw new Error("SMS code not requested yet");
        }
        const credential = firebase_config_1.auth.PhoneAuthProvider.credential(this.confirmationResult.verificationId, code);
        const result = await (0, firebase_config_1.auth)().signInWithCredential(credential);
        const firebaseUser = result.user;
        return {
            id: firebaseUser.uid,
            name: firebaseUser.displayName ?? '',
            email: firebaseUser.email ?? '',
            token: await firebaseUser.getIdToken()
        };
    }
}
exports.AuthRepositoryImpl = AuthRepositoryImpl;
