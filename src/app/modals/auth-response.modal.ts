import { User } from "./user.modal";

export interface AuthResponse {
    data: User;
    accessToken: string;
    refreshToken:string,
    message :string;
}