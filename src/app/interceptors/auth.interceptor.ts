import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CryptoService } from '../services/crypto.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private _crypto: CryptoService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = this._crypto.decryption(localStorage.getItem("access-token"));
    let newRequest = request.clone({
      headers: request.headers.set("Authorization", "Bearer " + token)
    })

    return next.handle(newRequest);
  }
}
