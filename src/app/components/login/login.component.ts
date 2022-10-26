import { AfterContentChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserModel } from 'src/app/models/user.model';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],  
  providers: [LoginService]
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
