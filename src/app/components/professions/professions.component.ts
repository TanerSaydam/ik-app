import { Component, OnInit } from '@angular/core';
import { ProfessionModel } from './models/profession.model';
import { ProfessionService } from './services/profession.service';

export class Pagination{
  size: number = 5;
  page: number = 0;
}


@Component({
  selector: 'app-professions',
  templateUrl: './professions.component.html',
  styleUrls: ['./professions.component.css']
})
export class ProfessionsComponent implements OnInit {
    
  pageCount: number = 0;
  professionList: ProfessionModel[] = [];
  profession: ProfessionModel = new ProfessionModel();
  updateProfession: ProfessionModel = new ProfessionModel();  
  pagination: Pagination = new Pagination();
  isUpdateFormActive = false;

  constructor(
    private _pro: ProfessionService
  ) { }

  ngOnInit(): void {   
    this.getList();
  }

  add(model: ProfessionModel){
    this._pro.add(model, ()=> { 
      this.profession = new ProfessionModel();    
      this.getList()});
  }

  update(model: boolean){
    this.profession = new ProfessionModel();    
    this.getList();
  }
 
  delete(id: number){
    this._pro.delete(id, ()=> this.getList());    
  }

  get(id: number){
    this.isUpdateFormActive = true;
    this._pro.getById(id, (res)=> this.updateProfession = res.data);
  }

  getList(){
    this._pro.getList(this.pagination,(res)=> {
      this.professionList = res.data.datas   

      this.pageCount = res.data.totalPageNumber
    });
  }

  setCurrentPageNumber(pageNumber: number){    
    this.pagination.page = pageNumber;
    this.getList();
  }

}
