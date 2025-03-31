import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class exampleInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Retrieve token from storage or a service
    const token = localStorage.getItem('authToken');

    // Clone the request to add the header
    let modifiedReq = req.clone({
      setHeaders: {
        // Add the Authorization header if token exists
        Authorization: token ? `Bearer ${token}` : ''
      }
    });

    // Add default query parameters
    // For example, you might want to always send these parameters with every request
    let params = modifiedReq.params;
    params = params.set('globalParam1', 'value1')
                   .set('globalParam2', 'value2');

    // Clone the request again to include the updated parameters
    modifiedReq = modifiedReq.clone({ params });

    // Continue with the modified request
    return next.handle(modifiedReq);
  }
}
