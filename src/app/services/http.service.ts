import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient,
    private _err: ErrorService
  ) { }

  add<T>(api: string, model: any, callBack?: (res: T)=> void){
    this._http.post<T>(api, model, {}).subscribe({
      next: (res)=> {
        callBack(res);
      },
      error: (err: HttpErrorResponse)=> {
        this._err.errorHandler(err)
      } 
    })
  }

  update<T>(api: string, model: any, callBack?: (res: T)=> void){
    this._http.put<T>(api, model, {}).subscribe({
      next: (res)=> {
        callBack(res);
      },
      error: (err: HttpErrorResponse)=> {
        this._err.errorHandler(err)
      } 
    })
  }

  delete<T>(api: string, callBack?: (res: T)=> void){
    this._http.delete<T>(api, {}).subscribe({
      next: (res)=> {
        callBack(res);
      },
      error: (err: HttpErrorResponse)=> {
        this._err.errorHandler(err)
      } 
    })
  }

  get<T>(api: string, callBack?: (res: T)=> void){
    this._http.get<T>(api, {}).subscribe({
      next: (res)=> {
        callBack(res);
      },
      error: (err: HttpErrorResponse)=> {
        this._err.errorHandler(err)
      } 
    })
  } 


}
