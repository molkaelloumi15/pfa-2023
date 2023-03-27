import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AvoirEmpEtud} from '../Model/AvoirEmpEtud';

@Injectable({
  providedIn: 'root'
})
export class AvoirEmpService {

  private apiServeurUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAvoirEmpEtuds(): Observable<AvoirEmpEtud[]> {
    return this.http.get<AvoirEmpEtud[]>(`${this.apiServeurUrl}/AvoirEmpEtud/all`);
  }

  public getAvoirEmpEtudById(id: number): Observable<AvoirEmpEtud> {
    return this.http.get<AvoirEmpEtud>(`${this.apiServeurUrl}/AvoirEmpEtud/find/${id}`);
  }

  public addAvoirEmpEtud(avoirEmpEtud: AvoirEmpEtud): Observable<AvoirEmpEtud> {
    return this.http.post<AvoirEmpEtud>(`${this.apiServeurUrl}/AvoirEmpEtud/add`, avoirEmpEtud);
  }

  public updateAvoirEmpEtud(avoirEmpEtud: AvoirEmpEtud): Observable<AvoirEmpEtud> {
    return this.http.put<AvoirEmpEtud>(`${this.apiServeurUrl}/AvoirEmpEtud/update`, avoirEmpEtud);
  }

  public deleteAvoirEmpEtud(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeurUrl}/AvoirEmpEtud/delete/${id}`);
  }

}
