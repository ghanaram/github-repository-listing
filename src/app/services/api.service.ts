import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.github.com';
  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(username: string): Observable<any>  {
    return this.httpClient.get(`https://api.github.com/users/${username}`);
  }

  getUserRepos(username: string, page: number, perPage: number): Observable<any[]> {

    const params = new HttpParams()
    .set('page', page.toString())
    .set('per_page', perPage.toString());

    return this.httpClient.get<any[]>(`${this.apiUrl}/users/${username}/repos`,{params});
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params
}
