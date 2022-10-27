import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-select',
  templateUrl: './generic-select.component.html',
  styleUrls: ['./generic-select.component.css']
})
export class GenericSelectComponent implements OnInit {

  selected: number = 0;
  @Input() data: any;
  @Input() name: string;
  @Input() class: string = "form-control";
  constructor() { }

  ngOnInit(): void {
  }

  setSelected(event: any){
    this.selected = event.target.value;    
  }

}
