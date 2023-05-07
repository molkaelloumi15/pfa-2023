import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Departement} from '../Model/Departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  private apiServeurUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getDepartements(): Observable<Departement[]> {
    return this.http.get<Departement[]>(`${this.apiServeurUrl}/Departement/all`);
  }

  public getDepartementById(id: number): Observable<Departement> {
    return this.http.get<Departement>(`${this.apiServeurUrl}/Departement/find/${id}`);
  }

  public addDepartement(departement: Departement): Observable<Departement> {
    return this.http.post<Departement>(`${this.apiServeurUrl}/Departement/add`, departement);
  }

  public updateDepartement(departement: Departement): Observable<Departement> {
    return this.http.put<Departement>(`${this.apiServeurUrl}/Departement/update`, departement);
  }

  public deleteDepartement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeurUrl}/Departement/delete/${id}`);
  }

}
