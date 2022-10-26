import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'src/app/services/toastr.service';
import { environment } from 'src/environments/environment';
import { ProfessionModel } from '../models/profession.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {

  api = environment.apiUrl  + "proffession";

  constructor(
    private _http: HttpClient,
    private _toastr: ToastrService
  ) { }

  add(model: ProfessionModel, callBack: ()=> void){
    this._http.post<any>(this.api, model).subscribe({
      next: ()=> {this._toastr.callToastr("Kayıt işlemi başarılı","","success"); callBack()},
      error: (err: HttpErrorResponse)=> console.log(err)      
    })
  }

  delete(id: number, callBack: ()=> void){
    this._http.delete<any>(this.api + "/" + id).subscribe({
      next: ()=> {this._toastr.callToastr("Silme işlemi başarılı","","warning"); callBack()},
      error: (err: HttpErrorResponse)=> console.log(err)      
    })
  }

  getList(callBack: (res:any)=> void){
    this._http.get<ProfessionModel[]>(this.api).subscribe({
      next: (res)=> {callBack(res)},
      error: (err: HttpErrorResponse)=> console.log(err)      
    })
  }
  
}
