import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  api = environment.apiUrl + "employee";
  api2 = environment.apiUrl + "profession";
  constructor(
    private _http: HttpClient
  ) { }

  getList(callBack: (res:any)=> void){
    this._http.get<any>(this.api).subscribe({
      next: (res)=> callBack(res),
      error: (err: HttpErrorResponse)=> console.log(err)      
    })
  }

  getListProfession(callBack: (res:any)=> void){
    this._http.get<any>(this.api2).subscribe({
      next: (res)=> callBack(res),
      error: (err: HttpErrorResponse)=> console.log(err)      
    })
  }
}
