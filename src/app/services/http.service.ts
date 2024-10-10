import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { buildHttpParams } from '../../utils/http-utils';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseUrl = 'https://rickandmortyapi.com/api/';
  private http = inject(HttpClient);

  constructor() {}

  getData<T>(endpoint: string, params?: any): Observable<T> {
    const httpParams = params ? buildHttpParams(params) : new HttpParams();
    return this.http.get<T>(`${this.baseUrl}${endpoint}`, {
      params: httpParams,
    });
  }
}
