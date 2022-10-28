import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GenericSectionComponent } from '../generic-section/generic-section.component';
import { GenericSelectComponent } from '../generic-select/generic-select.component';
import { GenericTableComponent } from '../generic-table/generic-table.component';
import { GenericComponent } from '../generic/generic.component';



@NgModule({
  declarations: [],
  imports: [
    GenericSelectComponent,
    CommonModule,
    GenericComponent,
    GenericSectionComponent,
    GenericTableComponent,
    HttpClientModule,  
  ],
  exports: [
    GenericSelectComponent,
    CommonModule,
    GenericComponent,
    GenericSectionComponent,
    GenericTableComponent,
    HttpClientModule,  
  ]
})
export class GenericModuleModule { }
