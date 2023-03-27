import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employe} from '../Model/Employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {


  private apiServeurUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getEmployes(): Observable<Employe[]> {
    return this.http.get<Employe[]>(`${this.apiServeurUrl}/Employe/all`);
  }

  public getEmployeById(id: number): Observable<Employe> {
    return this.http.get<Employe>(`${this.apiServeurUrl}/Employe/find/${id}`);
  }

  public addEmploye(employe: Employe): Observable<Employe> {
    return this.http.post<Employe>(`${this.apiServeurUrl}/Employe/add`, employe);
  }

  public updateEmploye(employe: Employe): Observable<Employe> {
    return this.http.put<Employe>(`${this.apiServeurUrl}/Employe/update`, employe);
  }

  public deleteEmploye(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeurUrl}/Employe/delete/${id}`);
  }

}
