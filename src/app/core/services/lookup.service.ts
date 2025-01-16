import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpService } from './htpp.service';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

private baseUrl = environment.apiUrl;
private cache: { [key: string]: any } = {}; // Cache object to store lookup data

constructor(private http:HttpService) {
}

getStatusList(): Observable<any> {
  return this.getDataFromCacheOrServer('lookup-status', this.http.get(this.baseUrl + '/Lookups/status'));
}

// Generic method to get data from cache or server
private getDataFromCacheOrServer(key: string, observable: Observable<any>): Observable<any> {
  if (this.cache[key]) {
    // Data found in cache, return cached data
    return of(this.cache[key]);
  } else {
    // Data not found in cache, fetch from server and cache it
    return observable.pipe(
      tap(data => this.cache[key] = data), // Cache the data
      catchError(error => {
        // Handle error
        console.error('Error loading data from server:', error);
        return of(null); // Return an empty observable in case of error
      })
    );
  }
}


}
