import { Routes } from "@angular/router";
import { LoginComponent } from "../components/login/login.component";
import { AuthGuard } from "../guards/auth.guard";
import { LayoutRoutesConst } from "./layout.routes";

export const RoutesConst: Routes = [
    {
      path: "",
      loadComponent: ()=> import("../components/layouts/layouts.component").then(m=> m.LayoutsComponent),
      canActivateChild: [AuthGuard],
      children: LayoutRoutesConst
    },
    {
        path: "login",
        loadComponent: ()=> import("../components/login/login.component").then(m=> LoginComponent)
    },
    {
        path: "**",
        loadComponent: ()=> import("../components/not-found/not-found.component").then(m=> m.NotFoundComponent)
    },
  ]