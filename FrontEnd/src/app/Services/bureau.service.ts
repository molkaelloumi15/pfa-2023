import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bureau} from '../Model/Bureau';

@Injectable({
  providedIn: 'root'
})
export class BureauService {
  private apiServeurUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getBureaux(): Observable<Bureau[]> {
    return this.http.get<Bureau[]>(`${this.apiServeurUrl}/Bureaux/all`);
  }

  public getBureauById(id: number): Observable<Bureau> {
    return this.http.get<Bureau>(`${this.apiServeurUrl}/Bureaux/find/${id}`);
  }

  public addBureau(bureau: Bureau): Observable<Bureau> {
    return this.http.post<Bureau>(`${this.apiServeurUrl}/Bureaux/add`, bureau);
  }

  public updateBureau(bureau: Bureau): Observable<Bureau> {
    return this.http.put<Bureau>(`${this.apiServeurUrl}/Bureaux/update`, bureau);
  }

  public deleteBureau(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeurUrl}/Bureaux/delete/${id}`);
  }
}
