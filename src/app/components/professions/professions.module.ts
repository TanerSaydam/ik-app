import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionsRoutingModule } from './professions-routing.module';
import { ProfessionsComponent } from './professions.component';
import { GenericModule } from '../generic/generic.module';
import { FormsModule } from '@angular/forms';
import { ProAddComponent } from './pro-add/pro-add.component';
import { ProListComponent } from './pro-list/pro-list.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { ProUpdateComponent } from './pro-update/pro-update.component';
import { ProfessionPipe } from './pro-list/pipe/profession.pipe';



@NgModule({
  declarations: [
    ProfessionsComponent,
    ProAddComponent,
    ProListComponent,
    ProUpdateComponent,
    ProfessionPipe
  ],
  imports: [
    CommonModule,
    GenericModule,
    FormsModule,
    DirectivesModule,    
    ProfessionsRoutingModule
  ]
})
export class ProfessionsModule { }
