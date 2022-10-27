import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.css']
})
export class GenericModalComponent implements OnInit {

  @Input() id: string = "";
  @Input() class: string = "modal-dialog modal-dialog-centered";
  @Input() title: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
