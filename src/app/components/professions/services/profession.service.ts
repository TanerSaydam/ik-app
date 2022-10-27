import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResultModel } from 'src/app/models/data-result.model';
import { ListDataResult } from 'src/app/models/list-data-result.model';
import { ResultModel } from 'src/app/models/result.model';
import { ErrorService } from 'src/app/services/error.service';
import { ToastrService } from 'src/app/services/toastr.service';
import { environment } from 'src/environments/environment';
import { ProfessionModel } from '../models/profession.model';
import { Pagination } from '../professions.component';


@Injectable({
  providedIn: 'root'
})
export class ProfessionService {
 
  api = environment.apiUrl  + "Professions";

  constructor(
    private _http: HttpClient,
    private _toastr: ToastrService,
    private _error:ErrorService,    
  ) { }

  add(model: ProfessionModel, callBack: ()=> void){    
    this._http.post<any>(this.api + "/add", model).subscribe({
      next: ()=> {this._toastr.callToastr("Kayıt işlemi başarılı","","success"); callBack()},
      error: (err: HttpErrorResponse)=> this._error.errorHandler(err)
    })
  }

  update(model: ProfessionModel, callBack?: ()=> void){
    this._http.put<ResultModel>(this.api + "/update", model).subscribe({
      next: ()=> {this._toastr.callToastr("Güncelle işlemi başarılı","","info"); callBack()},
      error: (err: HttpErrorResponse)=> 
      {        
        this._error.errorHandler(err)
      }
    })
  }

  delete(id: number, callBack: ()=> void){
    this._http.delete<ResultModel>(this.api + "/delete/" + id).subscribe({
      next: ()=> {this._toastr.callToastr("Silme işlemi başarılı","","warning"); callBack()},
      error: (err: HttpErrorResponse)=> console.log(err)      
    })
  }

  getById(id: number, callBack: (res:DataResultModel<ProfessionModel>)=> void){
    this._http.get<DataResultModel<ProfessionModel>>(this.api + "/getById/" + id).subscribe({
      next: (res)=> {callBack(res)},
      error: (err: HttpErrorResponse)=> console.log(err) 
    })
  }

  getList(page: Pagination,callBack: (res:any)=> void){
    this._http.get<any>(`${this.api}/GetListWithPagination/${page.page}/${page.size}`).subscribe({
      next: (res)=> {callBack(res)},
      error: (err: HttpErrorResponse)=> console.log(err)      
    })
  }
  
}
