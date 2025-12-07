import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { RouterModule } from "@angular/router";


@Component({
  selector: "app-template-driven",
  templateUrl: "./template-driven.component.html",
  styleUrls: ["./template-driven.component.scss"],
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, HttpClientModule]
})

export class TemplateDrivenComponent {

  public tsCode = '';

  constructor(private http: HttpClient) {
    this.http.get('../../../assets/txtfiles/template-driven.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);
  }

  submitted = false;

  user = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    country: '',
    terms: false
  };
  formData: any;
  submitted1 = false;

  // Custom validation for password matching
  passwordsDoNotMatch(form: NgForm) {
    const pwd = form.controls['password']?.value;
    const cpwd = form.controls['confirmPassword']?.value;
    return pwd && cpwd && pwd !== cpwd;
  }

  onSubmit(form: NgForm) {
    this.submitted = true;

    // Make all fields show errors
    Object.values(form.controls).forEach(control => {
      control.markAsTouched();
    });

    // Prevent submit if invalid
    if (form.invalid || this.passwordsDoNotMatch(form)) {
      console.warn("Form has errors!");
      return;
    }

    this.formData = form.value

    console.log("FINAL FORM DATA 👉", form.value);
    alert("Registration Successful!");

    form.resetForm();
    this.submitted = false;
  }

  demoUser = {
    name: "",
    emailAddress: ""
  };

  onSubmitUser(form: NgForm) {
    this.submitted1 = true;

    if (form.invalid) {
      return;
    }
    console.log("Form Values:", form.value);
    this.submitted1 = false;
  }
}
