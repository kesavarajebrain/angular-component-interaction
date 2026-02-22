import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthService } from "../service/auth/auth.service";
import { FormsModule, NgForm } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AuthResponse } from "../modals/auth-response.modal";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: "app-jwt",
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, HttpClientModule],
  providers: [AuthService],
  templateUrl: "./jwt.component.html",
  styleUrls: ["./jwt.component.scss"]
})


export class JwtComponent {
  authData?: AuthResponse;
  errorMessage = '';
  public tsCode ='';

  constructor(private auth: AuthService,private http: HttpClient) {
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
              this.auth.saveToken(res.accessToken);
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
    this.auth.getProfile().subscribe({
      next: res => {
        console.log(res)
        this.authData = res;
        this.errorMessage = '';
      },
      error: err => {
        console.log(err);
        this.errorMessage = err.error.message;

      },
    })
  }

  //Call Non Protected API
  getPublic() {
    this.auth.getPublic().subscribe({
      next: res => {
        console.log(res)
        this.authData = res;
        this.errorMessage = '';
      },
      error: err => {
        console.log(err);
        this.errorMessage = err.error.message;

      },
    })
  }

}
