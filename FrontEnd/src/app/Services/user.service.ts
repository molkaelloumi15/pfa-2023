import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {User} from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServeurUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServeurUrl}/User/all`);
  }

  public getUserByMail(mail: string): Observable<User> {
    return this.http.get<User>(`${this.apiServeurUrl}/User/find/${mail}`);
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServeurUrl}/User/add`, user);
  }

  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiServeurUrl}/User/update`, user);
  }

  public deleteUser(mail: string): Observable<void> {
    return this.http.delete<void>(`${this.apiServeurUrl}/User/delete/${mail}`);
  }

}
