import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { User } from "../../domain/entities/User";
import { AuthRepository } from "../../domain/repositories/AuthRepository";

export class AuthRepositoryImpl implements AuthRepository {
    private confirmationResult: FirebaseAuthTypes.ConfirmationResult | null = null;

    async fetch(params: { phone: string }): Promise<User> {
        throw new Error('Not implemented.');
    }

    async sendSmsCode(phone: string): Promise<void> {
        this.confirmationResult = await auth().signInWithPhoneNumber(phone);
    }

    async loginWithPhone(phone: string, code: string): Promise<User> {
        if (!this.confirmationResult) {
            throw new Error("SMS code not requested yet");
        }

        const credential = auth.PhoneAuthProvider.credential(
            this.confirmationResult.verificationId,
            code
        );

        const result = await auth().signInWithCredential(credential);

        const firebaseUser = result.user;

        return {
            id: firebaseUser.uid,
            name: firebaseUser.displayName ?? '',
            email: firebaseUser.email ?? '',
            token: await firebaseUser.getIdToken()
        };
    }
}