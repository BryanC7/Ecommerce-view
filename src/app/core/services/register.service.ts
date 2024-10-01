import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private REGISTER_URL = 'http://localhost:8080/auth/sign-up';

  constructor(private httpClient: HttpClient, private router: Router) { }

  register(name: string, lastName: string, email: string, password: string, phone: number, registerDate: string): Observable<any> {
    return this.httpClient.post<any>(
      this.REGISTER_URL, 
      {name, lastName, email, password, phone, registerDate}).pipe(
      tap(response => console.log(response))
    )
  }
}
