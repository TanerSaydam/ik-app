import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LayoutsComponent } from './layouts.component';

const routes: Routes = [
  { 
    path: '', 
    component: LayoutsComponent,
    canActivateChild: [AuthGuard],
    children: [
      { 
        path: '',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule),        
      },
      { 
        path: 'profession', 
        loadChildren: () => import('../professions/professions.module').then(m => m.ProfessionsModule) 
      },
      {
        path: "employee",
        loadChildren: () => import("../employees/employees.module").then(m=> m.EmployeesModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
