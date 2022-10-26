import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./components/layouts/layouts.module').then(m => m.LayoutsModule) 
  },
  { 
    path: 'login', 
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) 
  },
  { 
    path: '**', 
    loadChildren: () => import('./components/not-found/not-found.module').then(m => m.NotFoundModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
