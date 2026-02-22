import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthResponse } from "../../modals/auth-response.modal";

/**
 * @description
 * @class
 */
@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthService {


  private api = 'https://web-socket-server-4nt8.onrender.com';

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<AuthResponse>(`${this.api}/login`, {
      email,
      password
    });
  }

  saveToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  getProfile() {
    return this.http.get<AuthResponse>(`${this.api}/profile`,);
  }

  getPublic() {
    return this.http.get<AuthResponse>(`${this.api}/public`,);
  }
}
