import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionsRoutingModule } from './professions-routing.module';
import { ProfessionsComponent } from './professions.component';


@NgModule({
  declarations: [
    ProfessionsComponent
  ],
  imports: [
    CommonModule,
    ProfessionsRoutingModule
  ]
})
export class ProfessionsModule { }
