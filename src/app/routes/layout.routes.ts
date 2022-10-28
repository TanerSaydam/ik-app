import { Router, Routes } from "@angular/router";
import { RoleGuard } from "../guards/role.guard";

export const LayoutRoutesConst: Routes = [
    {
        path: "",
        loadComponent: () => import("../components/home/home.component").then(m => m.HomeComponent),        
    },
    {
        path: "profession",
        loadComponent: () => import("../components/professions/professions.component").then(m => m.ProfessionsComponent),
        //canActivate: [RoleGuard]
    },
    {
        path: "employee",
        loadComponent: () => import("../components/employees/employees.component").then(m => m.EmployeesComponent),
        //canActivate: [RoleGuard]
    }
]