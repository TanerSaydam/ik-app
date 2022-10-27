import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericComponent } from './generic/generic.component';
import { GenericSectionComponent } from './generic-section/generic-section.component';
import { RouterModule } from '@angular/router';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { GenericModalComponent } from './generic-modal/generic-modal.component';
import { GenericSelectComponent } from './generic-select/generic-select.component';



@NgModule({
  declarations: [
    GenericComponent,
    GenericSectionComponent,
    GenericTableComponent,
    GenericModalComponent,
    GenericSelectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GenericComponent,
    RouterModule,
    GenericSectionComponent,
    GenericTableComponent,
    GenericModalComponent,
    GenericSelectComponent
  ]
})
export class GenericModule { }
