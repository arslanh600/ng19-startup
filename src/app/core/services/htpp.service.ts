import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, firstValueFrom, Observable, Subject, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';



@Injectable({providedIn: 'root'})
export class HttpService {
  private headers: HttpHeaders;
  token: any;

  public baseUrl = environment.apiUrl;
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  showLoading(){
    this.isLoading$.next(true)
  }
  hideLoading(){
    this.isLoading$.next(false)
  }
  
  public get<T>(url:string,filter?: HttpParams | { [param: string]: any }): Observable<T> {
    return this.http.get<T>(this.baseUrl + url, { params: filter })
  }
  
  public getById<T>(url: string, id: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${url}/${id}`, { headers: this.headers });
  }
  
  public submit<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(this.baseUrl + url, body, { headers: this.headers });
  }
  
  public update<T>(url: string, body: any, id: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}${url}/${id}`, body, { headers: this.headers });
  }

  public delete<T>(url: string, id: any): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}${url}/${id}`, { headers: this.headers });
  }

  public upload<T>(url: string, file: File, formData?: FormData): Observable<any> {
    if (!formData) { formData = new FormData(); }
    formData.append('file', file);
    return this.http.post<T>(this.baseUrl + url, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
}
