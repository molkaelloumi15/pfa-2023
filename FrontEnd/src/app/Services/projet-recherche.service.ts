import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProjetRecherche} from '../Model/ProjetRecherche';

@Injectable({
  providedIn: 'root'
})
export class ProjetRechercheService {


  private apiServeurUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getProjetRecherches(): Observable<ProjetRecherche[]> {
    return this.http.get<ProjetRecherche[]>(`${this.apiServeurUrl}/ProjetRecherche/all`);
  }

  public getProjetRechercheById(id: number): Observable<ProjetRecherche> {
    return this.http.get<ProjetRecherche>(`${this.apiServeurUrl}/ProjetRecherche/find/${id}`);
  }

  public addProjetRecherche(projetRecherche: ProjetRecherche): Observable<ProjetRecherche> {
    return this.http.post<ProjetRecherche>(`${this.apiServeurUrl}/ProjetRecherche/add`, projetRecherche);
  }

  public updateProjetRecherche(projetRecherche: ProjetRecherche): Observable<ProjetRecherche> {
    return this.http.put<ProjetRecherche>(`${this.apiServeurUrl}/ProjetRecherche/update`, projetRecherche);
  }

  public deleteProjetRecherche(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeurUrl}/ProjetRecherche/delete/${id}`);
  }

}
