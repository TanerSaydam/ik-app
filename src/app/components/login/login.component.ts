import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { LoginService } from './services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],  
  providers: [LoginService],
  standalone: true,  
  imports: [
    FormsModule,
    HttpClientModule
  ]
})
export class LoginComponent implements OnInit {

  @ViewChild("loginForm") loginForm: NgForm;
  value: any;
  constructor(
    private _login: LoginService
  ) { } 

  ngOnInit(): void {}

  login() {
    this._login.login(this.loginForm);
  }



}
