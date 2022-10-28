import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { CryptoService } from './crypto.service';

@Injectable({
  providedIn: 'root'
})
export class DecodeService {

  jwt: JwtHelperService = new JwtHelperService();
  
  constructor(
    private _crypto: CryptoService
  ) { }

  decrytionToken(){
    return this._crypto.decryption(localStorage.getItem("access-token"))
  }

  getUserName(): string{
    let decodeToken = this.jwt.decodeToken(this.decrytionToken());        
    return decodeToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
    
  }

  getEmail(): string{
    let decodeToken = this.jwt.decodeToken(this.decrytionToken());    
    return decodeToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
    
  }

  getRoles(): string[]{
    let decodeToken = this.jwt.decodeToken(this.decrytionToken());    
    return decodeToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];    
  }
}
