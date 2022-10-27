import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationCheckDirective } from './validation-check.directive';



@NgModule({
  declarations: [
    ValidationCheckDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ValidationCheckDirective
  ]
})
export class DirectivesModule { }
