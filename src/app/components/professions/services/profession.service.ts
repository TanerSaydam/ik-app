import { Injectable } from '@angular/core';
import { DataResultModel } from 'src/app/models/data-result.model';

import { HttpService } from 'src/app/services/http.service';

import { environment } from 'src/environments/environment';
import { ProfessionModel } from '../models/profession.model';
import { Pagination } from '../professions.component';


@Injectable({
  providedIn: 'root'
})
export class ProfessionService {
 
  api = environment.apiUrl  + "Professions";

  constructor( 
    private _http2: HttpService
  ) { }


  add(model: ProfessionModel, callBack:(res: any)=> void){
    this._http2.add<any>(`${this.api}/add`,model, (res)=> callBack(res));
  }

  update(model: ProfessionModel, callBack:(res: any)=> void){
    this._http2.update<any>(`${this.api}/update`,model, (res)=> callBack(res));
  }

  delete(id: number, callBack:(res: any)=> void){
    this._http2.delete<any>(`${this.api}/delete/${id}`, (res)=> callBack(res));
  }

  
  getById(id: number, callBack:(res:DataResultModel<ProfessionModel>)=> void){
    this._http2.get<any>(`${this.api}/getById/${id}`, (res)=> callBack(res));
  }

  getList(page: Pagination, callBack: (res:any)=> void){
    this._http2.get<any>(`${this.api}/GetListWithPagination/${page.page}/${page.size}`,(res)=> callBack(res))
  }
  
}
