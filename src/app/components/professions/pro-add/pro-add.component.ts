import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ValidationCheckDirective } from 'src/app/directives/validation-check.directive';
import { ProfessionModel } from '../models/profession.model';

@Component({
  selector: 'app-pro-add',
  templateUrl: './pro-add.component.html',
  styleUrls: ['./pro-add.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    ValidationCheckDirective
  ]
})
export class ProAddComponent implements OnInit {

  @Output() addEvent = new EventEmitter<ProfessionModel>();
  @Input() profession: ProfessionModel = new ProfessionModel();
  @ViewChild("addForm") addForm: NgForm;
  constructor(    
  ) { }
 

  ngOnInit(): void {
  }

  add(){
    if (this.addForm.valid)
      this.addEvent.emit(this.profession)
  }
}
