import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';
import { HttpService } from 'src/app/services/http.service';
import { GenericSectionComponent } from '../generic/generic-section/generic-section.component';
import { GenericComponent } from '../generic/generic/generic.component';
import { ProfessionModel } from './models/profession.model';
import { ProAddComponent } from './pro-add/pro-add.component';
import { ProListComponent } from './pro-list/pro-list.component';
import { ProUpdateComponent } from './pro-update/pro-update.component';
import { ProfessionService } from './services/profession.service';

export class Pagination{
  size: number = 5;
  page: number = 0;
}


@Component({
  selector: 'app-professions',
  templateUrl: './professions.component.html',
  styleUrls: ['./professions.component.css'],
  standalone: true,
  providers: [
    ProfessionService,
    HttpService,    
  ],
  imports: [
    GenericComponent,
    GenericSectionComponent,
    ProUpdateComponent,
    ProAddComponent,
    ProListComponent,
    CommonModule,    
    HttpClientModule
  ]
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
