import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appValidationCheck]',
  standalone: true
})
export class ValidationCheckDirective {

  @Input() appValidationCheck: boolean;
  constructor(
    private _el : ElementRef
  ) { }

  @HostListener("keyup") keyup(){    
    this._el.nativeElement.className = "";
    if (this.appValidationCheck)
      this._el.nativeElement.className = "form-control is-valid"
    else
      this._el.nativeElement.className = "form-control is-invalid"
  }

}
