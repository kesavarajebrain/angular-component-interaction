import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-reactive",
  templateUrl: "./reactive.component.html",
  styleUrls: ["./reactive.component.scss"],
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule, HttpClientModule],
})

export class ReactiveComponent {

  registrationForm: FormGroup;
  submitted = false;
  public tsCode = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {

    this.http.get('../../../assets/txtfiles/reactive-form.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);

    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      passwordGroup: this.fb.group(
        {
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', [Validators.required]]
        },
        { validators: [this.passwordMatchValidator] }  // cross-field validator 
      ),
      gender: ['', Validators.required],
      country: ['', Validators.required],
      terms: [false, Validators.requiredTrue],

      // ✅ FormArray for multiple phone numbers
      phones: this.fb.array([
        this.createPhone()
      ]),

      // ✅ FormArray for multiple addresses
      addresses: this.fb.array([
        this.createAddress()
      ])
    });
  }

  // ✅ Phone FormGroup
  createPhone(): FormGroup {
    return this.fb.group({
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  // ✅ Address FormGroup
  createAddress(): FormGroup {
    return this.fb.group({
      house: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]]
    });
  }

  // Easy getters for template
  get fullName(): AbstractControl | null {
    return this.registrationForm.get('fullName');
  }

  get email(): AbstractControl | null {
    return this.registrationForm.get('email');
  }

  get passwordGroup(): AbstractControl | null {
    return this.registrationForm.get('passwordGroup');
  }

  get password(): AbstractControl | null {
    return this.registrationForm.get('passwordGroup.password');
  }

  get confirmPassword(): AbstractControl | null {
    return this.registrationForm.get('passwordGroup.confirmPassword');
  }

  get gender(): AbstractControl | null {
    return this.registrationForm.get('gender');
  }

  get country(): AbstractControl | null {
    return this.registrationForm.get('country');
  }

  get terms(): AbstractControl | null {
    return this.registrationForm.get('terms');
  }

  // ✅ Getters for FormArrays
  get phones(): FormArray {
    return this.registrationForm.get('phones') as FormArray;
  }

  get addresses(): FormArray {
    return this.registrationForm.get('addresses') as FormArray;
  }

  // ✅ Add / Remove Phone
  addPhone() {
    this.phones.push(this.createPhone());
  }

  removePhone(index: number) {
    this.phones.removeAt(index);
  }

  // ✅ Add / Remove Address
  addAddress() {
    this.addresses.push(this.createAddress());
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }


  // Custom validator for password match
  passwordMatchValidator(group: AbstractControl | null) {
    if (!group) return null;
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    if (!password || !confirm) return null;
    return password === confirm ? null : { mismatch: true };
  }

  onSubmit() {
    this.submitted = true;
    this.registrationForm.markAllAsTouched();

    if (this.registrationForm.invalid) {
      console.warn('Form invalid, please check the errors.');
      return;
    }

    console.log('✅ Reactive Form Submitted:', this.registrationForm.value);
    alert('Registration successful (Reactive Form)!');

    this.registrationForm.reset();
    this.phones.clear();
    this.addresses.clear();
    this.addPhone();
    this.addAddress();
    this.submitted = false;
  }
}
