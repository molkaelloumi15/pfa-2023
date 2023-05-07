import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PosteTelephonique} from '../Model/PosteTelephonique';

@Injectable({
  providedIn: 'root'
})
export class PosteTelephoniqueService {


  private apiServeurUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getPosteTelephoniques(): Observable<PosteTelephonique[]> {
    return this.http.get<PosteTelephonique[]>(`${this.apiServeurUrl}/PosteTelephonique/all`);
  }

  public getPosteTelephoniqueById(id: number): Observable<PosteTelephonique> {
    return this.http.get<PosteTelephonique>(`${this.apiServeurUrl}/PosteTelephonique/find/${id}`);
  }

  public addPosteTelephonique(posteTelephonique: PosteTelephonique): Observable<PosteTelephonique> {
    return this.http.post<PosteTelephonique>(`${this.apiServeurUrl}/PosteTelephonique/add`, posteTelephonique);
  }

  public updatePosteTelephonique(posteTelephonique: PosteTelephonique): Observable<PosteTelephonique> {
    return this.http.put<PosteTelephonique>(`${this.apiServeurUrl}/PosteTelephonique/update`, posteTelephonique);
  }

  public deletePosteTelephonique(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeurUrl}/PosteTelephonique/delete/${id}`);
  }

}
