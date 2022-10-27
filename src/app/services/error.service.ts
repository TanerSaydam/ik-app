import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from './toastr.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private _toastr: ToastrService
  ) { }

  errorHandler(err: HttpErrorResponse){
    console.log(err);
    
    if (err.status == 400) 
      this._toastr.callToastr(err.error,"Hata!","error")
    else if(err.status == 500)
      this._toastr.callToastr(err.error.Message, "Hata!", "error")
  }
}
