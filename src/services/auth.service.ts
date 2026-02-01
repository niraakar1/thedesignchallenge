import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isAuthenticated = signal(false);

  login(password: string): boolean {
    // Demo password
    if (password === 'impact2024' || password === 'admin') {
      this.isAuthenticated.set(true);
      return true;
    }
    return false;
  }
}