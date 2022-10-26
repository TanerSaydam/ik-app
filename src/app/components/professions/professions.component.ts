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
 
  delete(id: number){
    this._pro.delete(id, ()=> this.getList());    
  }

  getList(){
    this._pro.getList((res)=> this.professionList = res);
  }

}
