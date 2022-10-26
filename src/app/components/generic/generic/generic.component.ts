import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent implements OnInit {

  @Input() title: string = "";
  @Input() routes: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
