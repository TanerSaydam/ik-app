import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { RouterModule } from '@angular/router';
import { GenericModule } from '../generic/generic.module';



@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    GenericModule,
    RouterModule.forChild([
      {
        path: "",
        component: EmployeesComponent
      }
    ])
  ]
})
export class EmployeesModule { }
