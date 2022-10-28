import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css'],
  standalone: true,
  imports: [
    NavbarComponent,
    MainSidebarComponent,
    FooterComponent,
    ControlSidebarComponent,
    RouterModule
  ]
})
export class LayoutsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
