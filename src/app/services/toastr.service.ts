import { Injectable } from '@angular/core';

declare const toastr: any;

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { }

  callToastr(message: string, title: string, type: any, options: Partial<Options> = {closeButton: true, progressBar: true, timeOut: 5000}){    
    if (type == "error") {
      toastr.error(message,title, {
        closeButton: options.closeButton,
        progressBar: options.progressBar,
        timeOut: options.timeOut
      })
    }else if(type == "warning"){
      toastr.warning(message,title, {
        closeButton: options.closeButton,
        progressBar: options.progressBar,
        timeOut: options.timeOut
      })
    }
    else if(type == "info"){
      toastr.info(message,title, {
        closeButton: options.closeButton,
        progressBar: options.progressBar,
        timeOut: options.timeOut
      })
    }else if(type == "success"){
      toastr.success(message,title, {
        closeButton: options.closeButton,
        progressBar: options.progressBar,
        timeOut: options.timeOut
      })
    }else{
      toastr.success(message,title, {
        closeButton: options.closeButton,
        progressBar: options.progressBar,
        timeOut: options.timeOut
      })
    }
    
  }
}

export class Options{
  closeButton: boolean = true;
  progressBar:boolean= true;
  timeOut: number = 5000
}
