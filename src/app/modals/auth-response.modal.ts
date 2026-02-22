import { User } from "./user.modal";

export interface AuthResponse {
    data: User;
    accessToken: string;
    message :string;
}