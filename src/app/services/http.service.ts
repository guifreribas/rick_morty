import { HttpClient } from '@angular/common/http';
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

  getData(endpoint: string, params?: any): Observable<any> {
    const HttpParams = buildHttpParams(params);
    return this.http.get(`${this.baseUrl}${endpoint}`, { params: HttpParams });
  }
}
