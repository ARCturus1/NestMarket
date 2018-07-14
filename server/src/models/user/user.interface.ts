import { UserRole } from "./user.roles";

export interface IUser {
    id: number;
    username: string;
    email: string;
    password: string;
    accesstoken?: string;
    refreshtoken?: string;
    role?: number;
}