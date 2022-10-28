import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutesModel } from '../../routes/routes.model';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class MainSidebarComponent implements OnInit {

  
  routes = RoutesModel;

  constructor() { }

  ngOnInit(): void {
  }

}
