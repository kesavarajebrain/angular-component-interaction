import { AbstractControl, ValidationErrors } from '@angular/forms';
import { map } from 'rxjs/operators';
import { UserApiService } from './user-api.service';

export function emailExistsValidator(api: UserApiService) {
  return (control: AbstractControl) => {
    if (!control.value) return null; // important safety

    return api.checkEmailExists(control.value).pipe(
      map(exists => (exists ? { emailExists: true } : null))
    );
  };
}