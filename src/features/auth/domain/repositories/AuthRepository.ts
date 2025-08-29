import { Repository } from "../../../../core/domain/repository/IRepository";
import { User } from "../entities/User";

export interface AuthRepository extends Repository<User, { phone: string }> {
    loginWithPhone(phone: string, code: string): Promise<User>;
    sendSmsCode(phone: string): Promise<void>;
}