import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from '../models/repositories';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  private apiUrl = environment.baseUrl + 'repositories.json';

  constructor(private http: HttpClient) {}

  getRepositories(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.apiUrl);
  }
}