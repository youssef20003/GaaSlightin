import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router'; // Correct import

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    if (sessionStorage.getItem('Accesstoken')) {
      return true;
    } else {
      router.navigate(['/home']);
      return false;
    }
  } else {

    return false;
  }

  // const router = inject(Router);
  // const platformId = inject(PLATFORM_ID);

  // const authRoutes = ['/home', '/auth', '/signup', '/'];
  // const isAuthRoute = authRoutes.includes(state.url);
  // if (isPlatformBrowser(platformId)) {
  //   const isAuthenticated = !!sessionStorage.getItem('Accesstoken');
  //   if (isAuthenticated) {
  //     if (isAuthRoute) {
  //       router.navigate(['/profile']);
  //       return false; 
  //     }
  //     return true; 
  //   } else {
      
  //     if (!isAuthRoute) {
  //       router.navigate(['/home']);
  //       return false; 
  //     }
  //     return true;
  //   }
  // } else {
  //   return false;
  // }


};



