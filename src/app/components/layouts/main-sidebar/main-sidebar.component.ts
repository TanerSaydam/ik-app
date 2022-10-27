import { Component, OnInit } from '@angular/core';
import { RoutesModel } from '../../routes/routes.model';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css']
})
export class MainSidebarComponent implements OnInit {

  
  routes = RoutesModel;

  constructor() { }

  ngOnInit(): void {
  }

}
