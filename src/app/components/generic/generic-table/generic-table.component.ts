import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class GenericTableComponent implements OnInit {

  @Input() ths: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
