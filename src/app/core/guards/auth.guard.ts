import { Injectable } from '@angular/core';
import { CanActivate,  CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isAuthenticated = localStorage.getItem('bearerToken') !== null;
    if (isAuthenticated) {
      return true; 
    } else {
      this.router.navigate(['/']);
      return false; // Prevent access to the route
    }
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isAuthenticated = localStorage.getItem('bearerToken') !== null;
    if (isAuthenticated) {
      return true; 
    } else {
      this.router.navigate(['/']);
      return false; // Prevent access to the route
    }
  }
}
