import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom, startWith, Subject, takeUntil } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { CryptoService } from 'src/app/services/crypto.service';

import { ToastrService } from 'src/app/services/toastr.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginService extends Subject<void> implements OnDestroy{
  
  api: string = environment.apiUrl;

  constructor(
    @Inject("apiUrl") private apiUrl: string,
    private _http: HttpClient,
    private _router: Router,
    private _toastr: ToastrService,
    private _crypto: CryptoService
  ) {
    super();
  }

  ngOnDestroy(): void {
    this.next();
    this.complete();
 }

  login(loginForm: NgForm) {

    let name: string = loginForm.controls["email"].value;
    let email: string = loginForm.controls["email"].value;
    let password: string = loginForm.controls["password"].value;
   
    let api1 = this.api + "users?email=" + email + "&password=" + password;
    let api2 = this.apiUrl + "users?userName=" + email + "&password=" + password;

    let promise1 = this._http.get<UserModel[]>(api1);
    firstValueFrom(promise1).then((res) => {
      if (res.length == 0) {
        let promise2 = this._http.get<UserModel[]>(api2);
        firstValueFrom(promise2).then((res) => {
          if (res.length == 0)
            this._toastr.callToastr("Kullanıcı adı ya da şifre yanlış","Hata!","error")
          else          
            this.successLogin(res);
        })
      } else
        this.successLogin(res);
    }).catch(err => {
      console.log(err);
    })

    // this._http.get<any>(api1).pipe(
    //   takeUntil(this)
    // ).subscribe({
    //   next: ()=> console.log()
      
    // })
  }


  successLogin(res: UserModel[]) {    
    localStorage.setItem("access-token", this._crypto.encryption(JSON.stringify(res[0])));
    this._router.navigateByUrl("/");    
  }
}

