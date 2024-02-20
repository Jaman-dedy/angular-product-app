import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options, Product } from '../../type';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httClient: HttpClient
  ) { }

  get<T>(url: string, options: Options): Observable<T> {
    return this.httClient.get<T>(url, options) as Observable<T>
  }

  post<T>(url: string, body: Product, options: Options): Observable<T> {
    return this.httClient.post<T>(url, body, options) as Observable<T>
  }

  put<T>(url: string, body: Product, options: Options): Observable<T> {
    return this.httClient.put<T>(url, body, options) as Observable<T>
  }

  delete<T>(url: string, options: Options): Observable<T> {
    return this.httClient.delete<T>(url, options) as Observable<T>
  }
}
