import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AbstractControl, ValidationErrors } from '@angular/forms';

// async validators
import { UserApiService } from './async-validators/user-api.service';
import { emailExistsValidator } from './async-validators/email-exists.validator';
@Component({
  selector: "app-advanced-reactive",
  templateUrl: "./advanced-reactive.component.html",
  styleUrls: ["./advanced-reactive.component.scss"],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})

export class AdvancedReactiveComponent implements OnInit {

  dynamicForm!: FormGroup;
  submitted = false;

  // ✅ JSON CONFIG (API-driven) assume this the api response
  formConfig = [
    {
      type: 'text',
      label: 'Full Name',
      name: 'fullName',
      placeholder: 'Enter full name',
      validators: ['required', 'minLength:3']
    },
    {
      type: 'email',
      label: 'Email',
      name: 'email',
      placeholder: 'Enter email',
      validators: ['required', 'email'],
      asyncValidators: ['emailExists']
    },
    {
      type: 'group',
      name: 'passwordGroup',
      validators: ['passwordMatch'],
      fields: [
        {
          type: 'password',
          label: 'Password',
          name: 'password',
          placeholder: 'Enter password',
          validators: ['required', 'minLength:6']
        },
        {
          type: 'password',
          label: 'Confirm Password',
          name: 'confirmPassword',
          placeholder: 'Enter confirm password',
          validators: ['required']
        }
      ]
    },
    {
      type: 'select',
      label: 'Country',
      name: 'country',
      options: ['India', 'USA', 'UK'],
      validators: ['required']
    },
    {
      type: 'text',
      label: 'Aadhaar Number',
      name: 'aadhaar',
      placeholder: 'Enter aadhaar',
      validators: []
    },
    {
      type: 'text',
      label: 'Green card',
      name: 'greencard',
      placeholder: 'Enter green card',
      validators: []
    },
    {
      type: 'radio',
      label: 'Gender',
      name: 'gender',
      options: ['Male', 'Female', 'Trans gender'],
      validators: ['required']
    },
    {
      type: 'checkbox',
      label: 'Accept Terms',
      name: 'terms',
      validators: ['requiredTrue']
    }
  ];

  constructor(private fb: FormBuilder, private userApi: UserApiService) {

  }

  ngOnInit() {
    this.buildFormFromConfig();
    this.applyConditionalValidation();
  }

  // ✅ Convert JSON to FormGroup
  buildFormFromConfig() {
    const formGroup: any = {};

    this.formConfig.forEach((field: any) => {

      // ASYNC validators
      const syncValidators = this.mapValidators(field.validators || []);
      const asyncValidators = this.mapAsyncValidators(field.asyncValidators || []);

      if (field.type === 'group') {

        const nestedGroup: any = {};

        field?.fields.forEach((child: any) => {
          nestedGroup[child.name] = [
            '',
            this.mapValidators(child.validators || [])
          ];
        });

        // ✅ Apply group-level password validator
        formGroup[field.name] = this.fb.group(
          nestedGroup,
          field.validators?.includes('passwordMatch')
            ? { validators: [this.passwordMatchValidator.bind(this)] }
            : undefined
        );

      } else {

        formGroup[field.name] = [
          '',
          syncValidators,
          asyncValidators
        ];

      }
    });

    this.dynamicForm = this.fb.group(formGroup);
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    if (!password || !confirmPassword) return null;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  // ✅ Convert string validators to Angular validators
  mapValidators(validators: string[]) {
    const formValidators = [];
    for (let rule of validators) {
      if (rule === 'required') formValidators.push(Validators.required);
      if (rule === 'email') formValidators.push(Validators.email);
      if (rule === 'requiredTrue') formValidators.push(Validators.requiredTrue);

      if (rule.startsWith('minLength')) {
        const value = Number(rule.split(':')[1]);
        formValidators.push(Validators.minLength(value));
      }
    }
    return formValidators;
  }

  // ✅ ✅ ✅ CONDITIONAL VALIDATION (JSON + valueChanges)
  applyConditionalValidation() {
    this.dynamicForm.get('country')?.valueChanges.subscribe(country => {

      const aadhaar = this.dynamicForm.get('aadhaar');
      const ssn = this.dynamicForm.get('greencard');

      if (country === 'India') {
        aadhaar?.setValidators([
          Validators.required,
          Validators.pattern('^[0-9]{12}$')
        ]);
        ssn?.clearValidators();
        ssn?.setValue('');
      }

      else if (country === 'USA') {
        ssn?.setValidators([
          Validators.required,
          Validators.pattern('^[0-9]{9}$')
        ]);
        aadhaar?.clearValidators();
        aadhaar?.setValue('');
      }

      else {
        aadhaar?.clearValidators();
        ssn?.clearValidators();
        aadhaar?.setValue('');
        ssn?.setValue('');
      }

      // ✅ MUST CALL THIS
      aadhaar?.updateValueAndValidity();
      ssn?.updateValueAndValidity();
    });
  }

  // ✅ Async validator mapper
  mapAsyncValidators(validators: string[]) {
    const asyncValidators = [];

    for (let rule of validators) {
      if (rule === 'emailExists') {
        asyncValidators.push(emailExistsValidator(this.userApi));
      }
    }

    return asyncValidators;
  }
  onSubmit() {
    this.submitted = true;
    this.dynamicForm.markAllAsTouched();

    if (this.dynamicForm.invalid || this.dynamicForm.pending) return;

    console.log('✅ Dynamic Form Data:', this.dynamicForm.value);
    alert('Dynamic Form Submitted Successfully!');

    // ✅ ✅ ✅ PROPER FRESH RESET
    this.resetFormFresh();
  }

  resetFormFresh() {
    // ✅ 1. Reset submitted flag FIRST
    this.submitted = false;

    // ✅ 2. Reset all values + states
    this.dynamicForm.reset();

    // ✅ 3. CLEAR conditional validators manually
    const aadhaar = this.dynamicForm.get('aadhaar');
    const greencard = this.dynamicForm.get('greencard');

    aadhaar?.clearValidators();
    greencard?.clearValidators();

    aadhaar?.updateValueAndValidity({ emitEvent: false });
    greencard?.updateValueAndValidity({ emitEvent: false });

    // ✅ 4. Reset form state properly
    this.dynamicForm.markAsPristine();
    this.dynamicForm.markAsUntouched();

    // ✅ 5. Re-attach runtime rules again
    this.applyConditionalValidation();
  }

}
