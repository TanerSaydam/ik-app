import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProfessionModel } from '../models/profession.model';

@Component({
  selector: 'app-pro-list',
  templateUrl: './pro-list.component.html',
  styleUrls: ['./pro-list.component.css']
})
export class ProListComponent implements OnInit, OnChanges {

  @Input() professions: ProfessionModel[] = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.professions = changes["professions"].currentValue;
  }

  ngOnInit(): void {
  }


  delete(id: number){
    
  }
}
