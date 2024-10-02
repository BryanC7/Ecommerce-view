import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private REGISTER_URL = 'http://localhost:8080/auth/sign-up';

  constructor(private httpClient: HttpClient) { }

  register(name: string, lastName: string, email: string, password: string, phone: number, registerDate: string): Observable<any> {
    return this.httpClient.post<any>(
      this.REGISTER_URL, 
      {name, lastName, email, password, phone, registerDate}).pipe(
        catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    let errorMessage = '';
    if (error.error.message) {
      errorMessage = error.error.message; 
    }

    return throwError(() => new Error(errorMessage));
  }
}
