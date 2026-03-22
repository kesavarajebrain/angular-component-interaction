import { HttpClient } from "@angular/common/http";
import { Component, signal, computed, resource } from "@angular/core";
import { RouterModule } from "@angular/router";


// ✅ Types MUST be outside class
type Skill = { name: string };

type FormModel = {
  name: string;
  email: string;
  skills: Skill[];
};


@Component({
  selector: "app-signal-form",
  imports: [RouterModule],
  standalone: true,
  templateUrl: "./signal-form.component.html",
  styleUrls: ["./signal-form.component.scss"]
})


export class SignalFormComponent {
  tsCode = '';
  constructor(private http: HttpClient) {
    this.http.get('../../../assets/txtfiles/signal-forms.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);
  }



  // 🧠 Form state
  //Step 1 — Form State (Signal)
  form = signal({
    name: '',
    email: '',
    mobile: '',
    age: '',
    gender: '',
    password: '',
    confirmPassword: '',
    terms: false
  });

  // 🧠 UI Flags
  submitted = signal(false);


  //Step 2 — Update Inputs
  updateField(
    field: keyof ReturnType<typeof this.form>,
    value: any
  ) {
    this.form.update(f => ({ ...f, [field]: value }));
  }

  //Step 3 — Validation (Computed)
  nameError = computed(() => {
    if (!this.submitted()) return null;
    return this.form().name ? null : 'Name is required';
  });

  emailError = computed(() => {
    if (!this.submitted()) return null;

    const email = this.form().email;
    if (!email) return 'Email required';
    if (!email.includes('@')) return 'Invalid email';

    return null;
  });

  mobileError = computed(() => {
    if (!this.submitted()) return null;

    const m = this.form().mobile;
    if (!m) return 'Mobile required';
    if (m.length !== 10) return 'Must be 10 digits';

    return null;
  });

  ageError = computed(() => {
    if (!this.submitted()) return null;

    const age = Number(this.form().age);
    if (!age) return 'Age required';
    if (age < 18) return 'Must be 18+';

    return null;
  });

  genderError = computed(() => {
    if (!this.submitted()) return null;
    return this.form().gender ? null : 'Select gender';
  });

  passwordError = computed(() => {
    if (!this.submitted()) return null;

    const p = this.form().password;
    if (!p) return 'Password required';
    if (p.length < 6) return 'Min 6 chars';

    return null;
  });

  confirmPasswordError = computed(() => {
    if (!this.submitted()) return null;

    if (this.form().password !== this.form().confirmPassword) {
      return 'Passwords do not match';
    }

    return null;
  });

  termsError = computed(() => {
    if (!this.submitted()) return null;
    return this.form().terms ? null : 'Accept terms';
  });

  //Step 4 — Form Valid State
  isFormValid = computed(() =>
    !this.nameError() &&
    !this.emailError() &&
    !this.mobileError() &&
    !this.ageError() &&
    !this.genderError() &&
    !this.passwordError() &&
    !this.confirmPasswordError() &&
    !this.termsError()
  );

  // Step 5 — Submit Logic
  submit(event: Event) {
    event.preventDefault(); // 🔥 prevent refresh

    this.submitted.set(true);

    if (!this.isFormValid()) return;

    console.log('Form Submitted:', this.form());
  }


  // 2nd example form
  //Form State
  skilForm = signal<FormModel>({
    name: '',
    email: '',
    skills: [{ name: '' }]
  });

  // 2nd form flag
  skillFormSubmitted = signal(false);


  // Update Methods
  updateSkilFormField(field: keyof FormModel, value: any) {
    this.skilForm.update(f => ({ ...f, [field]: value }));
  }

  updateSkill(index: number, value: string) {
    this.skilForm.update(f => {
      const skills = [...f.skills];
      skills[index] = { name: value };
      return { ...f, skills };
    });
  }

  addSkill() {
    this.skilForm.update(f => ({
      ...f,
      skills: [...f.skills, { name: '' }]
    }));
  }

  removeSkill(index: number) {
    this.skilForm.update(f => ({
      ...f,
      skills: f.skills.filter((_, i) => i !== index)
    }));
  }

  // Validation (Computed)
  // =========================
  // 🧠 VALIDATIONS
  // =========================

  nameError1 = computed(() => {
    if (!this.skillFormSubmitted()) return null;
    return this.skilForm().name ? null : 'Name is required';
  });

  emailError1 = computed(() => {
    if (!this.skillFormSubmitted()) return null;

    const email = this.skilForm().email;

    if (!email) return 'Email is required';
    if (!email.includes('@')) return 'Invalid email';

    return null;
  });

  skillsError = computed(() => {
    if (!this.skillFormSubmitted()) return null;

    return this.skilForm().skills.some(s => !s.name.trim())
      ? 'All skills are required'
      : null;
  });
  // form valid
  isSkilFormValid = computed(() =>
    !this.nameError1() &&
    !this.emailError1() &&
    !this.skillsError()
  );

  // =========================
  // 🚀 SUBMIT
  // =========================

  skilFormSubmit(event: Event) {
    event.preventDefault(); // 🔥 stop refresh

    this.skillFormSubmitted.set(true);

    if (!this.isSkilFormValid()) return;

    console.log('Form Data:', this.skilForm());

    // Optional reset
    this.resetForm();
  }

   // =========================
  // 🔄 RESET
  // =========================

  resetForm() {
    this.skilForm.set({
      name: '',
      email: '',
      skills: [{ name: '' }]
    });

    this.skillFormSubmitted.set(false);
  }

}
