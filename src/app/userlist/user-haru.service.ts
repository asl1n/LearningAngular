import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserKoType } from './UserKoType';
import { environment } from '../../environment'; 

@Injectable({
  providedIn: 'root'
})
export class UserHaruService {
  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserKoType[]> {
    return this.http.get<UserKoType[]>(this.apiUrl);
  }

  removeUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  addUser(name: string, age: number): Observable<UserKoType> {
    const newUser = { id: Date.now().toString(), name, age: age.toString() };
    return this.http.post<UserKoType>(this.apiUrl, newUser);
  }
}
