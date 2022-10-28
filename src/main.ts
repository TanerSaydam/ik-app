import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot([
        {
          path: "",
          loadComponent: ()=> import("./app/components/layouts/layouts.component").then(m=> m.LayoutsComponent),
          children: [
            {
              path: "",
              loadComponent: ()=> import("./app/components/home/home.component").then(m=> m.HomeComponent)
            },
            {
              path: "profession",
              loadComponent: ()=> import("./app/components/professions/professions.component").then(m=> m.ProfessionsComponent)
            },
            {
              path: "employee",
              loadComponent: ()=> import("./app/components/employees/employees.component").then(m=> m.EmployeesComponent)
            }
          ]
        }
      ])
    )
  ]
})