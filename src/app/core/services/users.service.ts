import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private USERS_URL = 'http://localhost:8080/api/users';

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.httpClient.get<any>(this.USERS_URL, { headers }).pipe(
      tap(response => {
        console.log(response);
      })
    );
  }
}
