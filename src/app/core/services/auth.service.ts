import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private LOGIN_URL = 'http://localhost:8080/auth/log-in';
  private tokenKey = 'authToken';

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.LOGIN_URL, {email, password}).pipe(
      catchError(this.handleError),
      tap(response => {
        if(response.jwt) {
          this.setToken(response.jwt);
        }
      })
    )
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error.message) {
      errorMessage = error.error.message; 
    }

    return throwError(() => new Error(errorMessage));
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  private getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if(!token) {
      return false;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));
    const expirate = payload.exp * 1000;

    return Date.now() < expirate;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }
}
