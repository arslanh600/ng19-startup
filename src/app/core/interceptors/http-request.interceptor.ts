import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('bearerToken');
    const baseUrl = environment.apiUrl;

    // Skip intercepting requests for 'i18n' files
    if (this.isI18nRequest(req)) {
      return next.handle(req);
    }

    const url = this.getApiUrl(req);

    const clonedRequest = this.cloneRequest(req, token, baseUrl, url);
    return next.handle(clonedRequest).pipe(
      tap(
        () => {},
        (error) => this.handleError(error)
      )
    );
  }

  private isI18nRequest(req: HttpRequest<any>): boolean {
    return req.url.includes('i18n');
  }

  private getApiUrl(req: HttpRequest<any>): string {
    return req.url.includes('api') ? req.url : 'api/' + req.url;
  }

  private cloneRequest(req: HttpRequest<any>, token: string | null, baseUrl: string, url: string): HttpRequest<any> {
    let headers = req.headers;

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return req.clone({
      headers,
      url: `${baseUrl}${url}`,
    });
  }

  private handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        case 401:
        case 403:
          this.router.navigate(['auth/signin']);
          break;
        case 409:
          console.error(error.error.messages[0]);
          break;
        default:
          console.error('Error occurred:', error);
          break;
      }
    }
  }
}
