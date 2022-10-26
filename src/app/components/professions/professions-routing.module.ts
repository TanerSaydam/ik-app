import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionsComponent } from './professions.component';

const routes: Routes = [{ path: '', component: ProfessionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionsRoutingModule { }
