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

  saveAccessToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  getProfile() {
    return this.http.get<AuthResponse>(`${this.api}/profile`,);
  }

  getPublic() {
    return this.http.get<AuthResponse>(`${this.api}/public`,);
  }

  getRefreshToken() {
    return localStorage.getItem('refresh_token');
  }

  saveRefreshToken(token: string) {
    localStorage.setItem('refresh_token', token);
  }


  refreshToken() {
    return this.http.post<any>(`${this.api}/refresh`, {
      refreshToken: this.getRefreshToken()
    });
  }

  logout() {
    let refreshToken = this.getRefreshToken();
    return this.http.post<AuthResponse>(`${this.api}/logout`, {
      refreshToken
    });
  }
}
