import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const RoleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const expectedRoles = route.data['expectedRoles'] as string[];
  const userRoles = authService.getRoles();
  
  if (userRoles.some(role => expectedRoles.includes(role))) { 
    return true;
  }

  return router.navigate(['/unauthorized']);
}