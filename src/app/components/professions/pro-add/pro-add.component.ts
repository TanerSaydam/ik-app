import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProfessionModel } from '../models/profession.model';

@Component({
  selector: 'app-pro-add',
  templateUrl: './pro-add.component.html',
  styleUrls: ['./pro-add.component.css']
})
export class ProAddComponent implements OnInit {

  @Output() addEvent = new EventEmitter<ProfessionModel>();
  @Input() profession: ProfessionModel = new ProfessionModel();
  constructor(    
  ) { }
 

  ngOnInit(): void {
  }

  add(){
    this.addEvent.emit(this.profession)
  }


}
