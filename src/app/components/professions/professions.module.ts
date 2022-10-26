import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionsRoutingModule } from './professions-routing.module';
import { ProfessionsComponent } from './professions.component';
import { GenericModule } from '../generic/generic.module';
import { FormsModule } from '@angular/forms';
import { ProAddComponent } from './pro-add/pro-add.component';
import { ProListComponent } from './pro-list/pro-list.component';


@NgModule({
  declarations: [
    ProfessionsComponent,
    ProAddComponent,
    ProListComponent
  ],
  imports: [
    CommonModule,
    GenericModule,
    FormsModule,
    ProfessionsRoutingModule
  ]
})
export class ProfessionsModule { }
