import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Etude} from '../Model/Etude';

@Injectable({
  providedIn: 'root'
})
export class EtudeService {

  private apiServeurUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getEtudes(): Observable<Etude[]> {
    return this.http.get<Etude[]>(`${this.apiServeurUrl}/Etude/all`);
  }

  public getEtudeById(id: number): Observable<Etude> {
    return this.http.get<Etude>(`${this.apiServeurUrl}/Etude/find/${id}`);
  }

  public addEtude(etude: Etude): Observable<Etude> {
    return this.http.post<Etude>(`${this.apiServeurUrl}/Etude/add`, etude);
  }

  public updateEtude(etude: Etude): Observable<Etude> {
    return this.http.put<Etude>(`${this.apiServeurUrl}/Etude/update`, etude);
  }

  public deleteEtude(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeurUrl}/Etude/delete/${id}`);
  }

}
