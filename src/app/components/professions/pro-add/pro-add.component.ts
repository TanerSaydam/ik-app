import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProfessionModel } from '../models/profession.model';

@Component({
  selector: 'app-pro-add',
  templateUrl: './pro-add.component.html',
  styleUrls: ['./pro-add.component.css']
})
export class ProAddComponent implements OnInit {
    
  @Output() addEvent = new EventEmitter<ProfessionModel>();
  profession: ProfessionModel = new ProfessionModel();
  constructor(    
  ) { }

  ngOnInit(): void {
  }

  add(){
    this.addEvent.emit(this.profession)
  }


}
