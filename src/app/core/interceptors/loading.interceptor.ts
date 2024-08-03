import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Injectable()

export class loadingInterceptor implements HttpInterceptor {
  private loading = false;

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loading = true;
    return next.handle(req).pipe(
      tap(
        () => this.loading = false,
        () => this.loading = false
      )
    );
  }
};
