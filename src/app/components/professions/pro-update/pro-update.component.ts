import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfessionModel } from '../models/profession.model';
import { ProfessionService } from '../services/profession.service';

@Component({
  selector: 'app-pro-update',
  templateUrl: './pro-update.component.html',
  styleUrls: ['./pro-update.component.css']
})
export class ProUpdateComponent implements OnInit {

 @Input() profession: ProfessionModel = new ProfessionModel();
 @Output() updateEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
 @Output() closeEvent: EventEmitter<any> = new EventEmitter();
 @ViewChild("updateForm") updateForm: NgForm;
  constructor(
    private _pro: ProfessionService
  ) { }

  ngOnInit(): void {
  }

  update(){
    debugger
    if(this.updateForm.valid){
      this._pro.update(this.profession,()=>{
        this.updateEvent.emit(true);
        this.close();
      })
    }
  }

  close(){
    this.closeEvent.emit();
  }

}
