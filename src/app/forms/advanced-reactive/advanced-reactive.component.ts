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
import { HttpClient } from "@angular/common/http";

// async validators
import { UserApiService } from './async-validators/user-api.service';
import { emailExistsValidator } from './async-validators/email-exists.validator';

import { debounceTime, Subscription } from 'rxjs';
@Component({
    selector: "app-advanced-reactive",
    templateUrl: "./advanced-reactive.component.html",
    styleUrls: ["./advanced-reactive.component.scss"],
    imports: [CommonModule, ReactiveFormsModule, RouterModule]
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
      name: 'password',
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
      type: 'select',
      label: 'Employment Type',
      name: 'employmentType',
      options: ['Student', 'Self Employed', 'Employed'],
      validators: ['required']
    },
    {
      type: 'text',
      label: 'Company Name',
      name: 'companyName',
      placeholder: 'Enter company name',
      validators: []   // ✅ REQUIRED will be added dynamically
    },
    {
      type: 'select',
      label: 'Applied Before?',
      name: 'appliedCase',
      options: ['No', 'Applied But Rejected'],
      validators: ['required']
    },
    {
      type: 'text',
      label: 'Specify Reason (if already rejected)',
      name: 'reason',
      placeholder: 'Enter Specific Reason',
      validators: ['required']
    },
    {
      type: 'select',
      label: 'Differently Abled Person?',
      name: 'differentlyAbledCheck',
      options: ['Yes', 'No'],
      validators: ['required']
    },
    {
      type: 'text',
      label: 'Please Specify Details',
      name: 'differentlyAbled',
      placeholder: 'Enter Specific Details',
      visibleWhen: {
        field: 'differentlyAbledCheck',
        value: 'Yes'
      },
      validators: ['required']
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
  tsCode!: string;

  constructor(private fb: FormBuilder, private userApi: UserApiService, private http: HttpClient) {
    this.http.get('../../../assets/txtfiles/advanced-reactive-form.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);

  }

  profileForm!: FormGroup;
  autoSaveSub!: Subscription;
  isSaving = false;

  ngOnInit() {
    this.buildFormFromConfig(); // build form from api
    this.applyConditionalValidation();  // Country → Aadhaar / Greencard
    this.applyDynamicValidators();      // ✅ Gender → Greencard REQUIRED
    this.enableDisableValidators();
    this.conditionalFieldsValidators();


    /* Auto save form*/
    // ✅ 1. Build form
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      bio: ['', [Validators.required]]
    });

    // ✅ 2. Restore saved draft
    this.restoreDraft();

    // ✅ 3. Listen for auto-save
    this.autoSaveSub = this.profileForm.valueChanges
      .pipe(
        debounceTime(1000) // wait until user stops typing
      )
      .subscribe(value => {
        this.autoSave(value);
      });
  }

  // ✅ Convert JSON to FormGroup - JSON-based Dynamic Forms
  buildFormFromConfig() {
    const formGroup: any = {};
    this.formConfig.forEach((field: any) => {

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

  // CUSTOM VALIDATION
  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    if (!password || !confirmPassword) return null;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  // ✅ ✅ ✅ CONDITIONAL VALIDATION (JSON + valueChanges) Conditional Validators 
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

  // Dynamic validation
  applyDynamicValidators() {
    this.dynamicForm.get('employmentType')?.valueChanges.subscribe(type => {

      const company = this.dynamicForm.get('companyName');

      if (type === 'Employed') {
        company?.setValidators([
          Validators.required,
          Validators.minLength(3)
        ]);
      } else {
        company?.clearValidators();
        company?.setValue('');
      }

      // ✅ MANDATORY
      company?.updateValueAndValidity();
    });
  }


  onSubmit() {
    this.submitted = true;
    this.dynamicForm.markAllAsTouched();

    if (this.dynamicForm.invalid || this.dynamicForm.pending) return;

    console.log('✅ Dynamic Form Data:', this.dynamicForm.value);
    alert('Dynamic Form Submitted Successfully!');

    // ✅ ✅ ✅ PROPER FRESH RESET
    this.resetFormFresh();
    //this.resetFormHard();
  }

  // Normal reset
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

  // HARD Reset
  resetFormHard() {
    this.submitted = false;
    this.buildFormFromConfig();       // ✅ rebuild form fresh
    this.applyConditionalValidation();
  }

  enableDisableValidators() {
    this.dynamicForm.get('appliedCase')?.valueChanges.subscribe(type => {
      const reason = this.dynamicForm.get('reason');

      if (type === 'Applied But Rejected') {
        reason?.enable();
        reason?.setValidators([
          Validators.required,
          Validators.minLength(3)]
        );
      } else {
        reason?.disable();
        reason?.reset(); // 🔥 clear value when disabled
      }
    })
  }

  conditionalFieldsValidators() {
    this.formConfig.forEach(field => {
      if (!field.visibleWhen) return;

      const dependent = this.dynamicForm.get(field.visibleWhen.field);
      const control = this.dynamicForm.get(field.name);

      dependent?.valueChanges.subscribe(value => {
        if (value === field.visibleWhen.value) {
          // SHOW → enable validators
          control?.setValidators(
            this.mapValidators(field.validators || [])
          );
        } else {
          // HIDE → remove value + validators
          control?.clearValidators();
          control?.reset();
        }

        control?.updateValueAndValidity();
      });
    });
  }

  isFieldVisible(field: any): boolean {
    if (!field.visibleWhen) return true;

    const dependentControl = this.dynamicForm.get(field.visibleWhen.field);
    return dependentControl?.value === field.visibleWhen.value;
  }


  // ✅ AUTO SAVE LOGIC
  autoSave(value: any) {
    // ❌ Don't save invalid form
    if (this.profileForm.invalid) return;

    this.isSaving = true;

    // simulate API / storage delay
    setTimeout(() => {
      localStorage.setItem('profileDraft', JSON.stringify(value));
      this.isSaving = false;
      console.log('💾 Draft auto-saved', value);
    }, 300);
  }

  // ✅ RESTORE ON LOAD
  restoreDraft() {
    const saved = localStorage.getItem('profileDraft');
    if (!saved) return;

    this.profileForm.patchValue(JSON.parse(saved), {
      emitEvent: false // 🔥 VERY IMPORTANT
    });
  }

  clearDraft() {
    localStorage.removeItem('profileDraft');
    this.profileForm.reset();
  }

  ngOnDestroy() {
    this.autoSaveSub?.unsubscribe();
  }

  // PATCH VALUE - we can patch single data also, no need to configure all the data what ever we patched that only going to remaining all will be remains the same
  patchValue() {
    this.profileForm.patchValue({
      name: 'Name is patched',
      email: 'Email@ispatched.com'
    })
  }

  // SET VALUE - we need to pass all the fileds if any field we missed it will throw a error like below
  //   patchValue = partial update
  //   setValue = full contract update
  setValue() {
    this.profileForm.setValue({
      name: 'Name is set',
      email: 'Email@iset.com',
      bio: 'Bio is set' // ERROR RuntimeError: NG01002: Must supply a value for form control with name: 'bio'
    })
  }

}
