import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProfessionModel } from '../models/profession.model';

@Component({
  selector: 'app-pro-list',
  templateUrl: './pro-list.component.html',
  styleUrls: ['./pro-list.component.css']
})
export class ProListComponent implements OnInit, OnChanges {

  @Output() deleteEvent = new EventEmitter<number>();
  @Input() professions: ProfessionModel[] = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.professions = changes["professions"].currentValue;
  }

  ngOnInit(): void {
  }


  delete(id: number){
    this.deleteEvent.emit(id);
  }
}
