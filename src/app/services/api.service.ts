import { HttpClient } from '@angular/common/http';
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

  getUser(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }

  getUserRepos(githubUsername: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/users/${githubUsername}/repos`);
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params
}
