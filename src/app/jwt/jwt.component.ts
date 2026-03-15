import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthService } from "../service/auth/auth.service";
import { FormsModule, NgForm } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AuthResponse } from "../modals/auth-response.modal";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-jwt",
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: "./jwt.component.html",
  styleUrls: ["./jwt.component.scss"]
})


export class JwtComponent {
  authData?: AuthResponse;
  errorMessage = '';
  public tsCode = '';

  constructor(private auth: AuthService, private http: HttpClient) {
    this.http.get('../../../assets/txtfiles/jwt.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);
  }


  model = {
    email: '',
    password: ''
  };

  setFormValues() {
    this.model.email = 'test@test.com';
    this.model.password = '1234';
  }

  clearFormValues(form: NgForm) {
    form.resetForm();
    this.model = {
      email: '',
      password: ''
    };
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value)
      const email = form.value.email.trim();
      const password = form.value.password.trim();
      this.auth.login(email, password)
        .subscribe(
          {
            next: res => {
              this.auth.saveAccessToken(res.accessToken);
              this.auth.saveRefreshToken(res.refreshToken);
              this.authData = res;
              this.errorMessage = '';
            },
            error: err => {
              this.authData = undefined;
              this.errorMessage = err.error.message;
            }
          }
        );
    }
  }

  //Call Protected API
  getUser() {
    // Reset previous state
    this.authData = undefined;
    this.errorMessage = '';
    this.auth.getProfile().subscribe({
      next: res => {
        console.log(res)
        if (res) {
          console.log(res)
          this.authData = res;
          this.errorMessage = '';
        }
      },
      error: err => {
        console.log(err)
        this.errorMessage = err?.error?.message || 'API Error';
      },
    })
  }

  //Call Non Protected API
  getPublic() {
    // Reset previous state
    this.authData = undefined;
    this.errorMessage = '';
    this.auth.getPublic().subscribe({
      next: res => {
        console.log(res)
        this.authData = res;
        this.errorMessage = '';
      },
      error: err => {
        console.log(err);
        this.errorMessage = err?.error?.message || 'Unauthorized';
        this.authData = undefined;
      },
    })
  }

  logout() {
    // Reset previous state
    this.authData = undefined;
    this.errorMessage = '';
    this.auth.logout().subscribe({
      next: res => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        this.authData = res;
      },
      error: err => {
        this.errorMessage = err?.error?.message;
      }
    })
  }

}
