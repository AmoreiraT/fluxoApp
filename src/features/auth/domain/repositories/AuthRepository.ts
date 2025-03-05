import { Repository } from "../../../../core/domain/repository/IRepository";
import { User } from "../entities/User";

export interface AuthRepository extends Repository<User, { email: string; password: string }> {
    login(credentials: { email: string; password: string }): Promise<User>;
}