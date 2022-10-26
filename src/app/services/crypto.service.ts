import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  cryptoTS = require("crypto-ts");
  secretKey = "ik app secret key 456";
  constructor() { }

  encryption(value: string): string {    
    var cryptoValue = this.cryptoTS.AES.encrypt(value, this.secretKey);    
    return cryptoValue;
  }

  decryption(value: string): any{
     var bytes  = this.cryptoTS.AES.decrypt(value, this.secretKey);
      var decryptedValue = bytes.toString(this.cryptoTS.enc.Utf8);
      return decryptedValue;
  }
}
