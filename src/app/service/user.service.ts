import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {User, UserRequest} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  createUser(params: UserRequest): Observable<User> {
    return this.httpClient.post<User>(`${this.apiUrl}/users`, params);
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/users`);
  }

  getUserById(userId: string | number): Observable<User> {
    return this.httpClient.get<User>(`${this.apiUrl}/users/${userId}`);
  }

  updateUser(params: User): Observable<User> {
    return this.httpClient.put<User>(`${this.apiUrl}/users/${params.id}`, params);
  }

  deleteUser(userId: string | number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/users/${userId}`);
  }

}
