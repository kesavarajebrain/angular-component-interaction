import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserApiService {

  // ✅ Simulate backend email check
  checkEmailExists(email: string) {
    const existingEmails = ['test@gmail.com', 'admin@gmail.com'];
    const exists = existingEmails.includes(email);
    return of(exists).pipe(delay(1000)); // simulate network delay
  }
}
