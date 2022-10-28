import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DecodeService } from 'src/app/services/decode.service';
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
  userName: string = "";
roles: string[] = []
  constructor(
    private _decode: DecodeService
  ) { }

  ngOnInit(): void {
    this.userName = this._decode.getUserName();
    this.roles = this._decode.getRoles();
   // console.log(this.roles);
    
  }

}
