import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthService } from "../../service/auth/auth.service";
import { HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-rounting-controls",
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: "./rounting-controls.component.html",
  styleUrls: ["./rounting-controls.component.scss"]
})

export class RountingControlsComponent implements OnInit {

  tsCode: any;
  status: boolean | null = null;
  constructor(private auth: AuthService, private http: HttpClient) {

  }

  ngOnInit() {

  }


  logOutExistingSesssion() {
    this.auth.logout().subscribe({
      next: () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        alert("🚨 Logged OUT 🚨")
      },
      error: () => {
      }
    })
  }

  login() {
    const email = 'test@test.com';
    const password = '1234';
    this.auth.login(email, password)
      .subscribe(
        {
          next: (res) => {
            this.auth.saveAccessToken(res.accessToken);
            this.auth.saveRefreshToken(res.refreshToken);
            alert('👉 Logged in Success ✅')
          },
          error: () => {
          }
        }
      );
  }

  getTxtFile(fileName: string) {
    this.http.get('../../../assets/txtfiles/' + fileName + '.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);
  }


  hasUnsavedChanges(): boolean {
    return this.status === true;
  }
}
