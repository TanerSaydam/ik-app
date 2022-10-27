import { Component, OnInit } from '@angular/core';
import { ProfessionModel } from './models/profession.model';
import { ProfessionService } from './services/profession.service';

@Component({
  selector: 'app-professions',
  templateUrl: './professions.component.html',
  styleUrls: ['./professions.component.css']
})
export class ProfessionsComponent implements OnInit {
  
  professionList: ProfessionModel[] = [];
  profession: ProfessionModel = new ProfessionModel();
  updateProfession: ProfessionModel = new ProfessionModel();  

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
    this._pro.getList((res)=> this.professionList = res.data);
  }

}
