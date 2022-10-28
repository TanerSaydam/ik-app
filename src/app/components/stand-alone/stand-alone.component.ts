import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stand-alone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stand-alone.component.html',
  styleUrls: ['./stand-alone.component.css']
})
export class StandAloneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
