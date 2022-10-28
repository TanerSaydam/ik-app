import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GenericSectionComponent } from '../generic/generic-section/generic-section.component';
import { GenericSelectComponent } from '../generic/generic-select/generic-select.component';
import { GenericTableComponent } from '../generic/generic-table/generic-table.component';
import { GenericComponent } from '../generic/generic/generic.component';

@Component({
  selector: 'app-stand-alone',
  standalone: true,
  imports: [
    GenericSelectComponent,
    CommonModule,
    GenericComponent,
    GenericSectionComponent,
    GenericTableComponent,
    HttpClientModule,  
  ],  
  templateUrl: './stand-alone.component.html',
  styleUrls: ['./stand-alone.component.css'],
  
})
export class StandAloneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
