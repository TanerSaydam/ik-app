import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom, startWith, Subject, takeUntil } from 'rxjs';
import { DataResultModel } from 'src/app/models/data-result.model';
import { UserModel } from 'src/app/models/user.model';
import { CryptoService } from 'src/app/services/crypto.service';
import { ErrorService } from 'src/app/services/error.service';

import { ToastrService } from 'src/app/services/toastr.service';
import { environment } from 'src/environments/environment';
import { TokenModel } from '../models/token.model';

@Injectable()
export class LoginService extends Subject<void> implements OnDestroy {

  api: string = environment.apiUrl;

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _toastr: ToastrService,
    private _crypto: CryptoService,
    private _error: ErrorService
  ) {
    super();
  }

  ngOnDestroy(): void {
    this.next();
    this.complete();
  }

  login(loginForm: NgForm) {

    let email: string = loginForm.controls["email"].value;
    let password: string = loginForm.controls["password"].value;

    let api = this.api + "Auth/login";
    let model: { email: string, password: string } = { "email": email, "password": password }

    let promise1 = this._http.post<DataResultModel<TokenModel>>(api, model);
    firstValueFrom(promise1).then((res) => {
      this.successLogin(res);
    }).catch(err => {
      this._error.errorHandler(err);
    })

    // this._http.get<any>(api1).pipe(
    //   takeUntil(this)
    // ).subscribe({
    //   next: ()=> console.log()

    // })
  }


  successLogin(res: DataResultModel<TokenModel>) {    
    localStorage.setItem("access-token", this._crypto.encryption(res.data.accessToken));
    this._router.navigateByUrl("/");
  }
}

