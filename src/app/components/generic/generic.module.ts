import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericComponent } from './generic/generic.component';
import { GenericSectionComponent } from './generic-section/generic-section.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GenericComponent,
    GenericSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GenericComponent,
    RouterModule,
    GenericSectionComponent
  ]
})
export class GenericModule { }
