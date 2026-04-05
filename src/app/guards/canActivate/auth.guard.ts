import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const isLoggedIn = localStorage.getItem('access_token'); // replace with real logic

  if (isLoggedIn) {
    alert("✅ Good To Enter Secure Page -->>")
    return true;
  } else {
    alert("🚫 Login Required 🚫 Take you back ❗")
    router.navigate(['/routing']);
    return false;
  }
};
