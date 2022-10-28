export class RModel{
    name: string = "";
    path: string = "";
    icon: string = "";
    role: string ="";
}

export const RoutesModel:RModel[] = [
    {
      name: "Ana Sayfa",
      icon: "nav-icon fas fa-home",
      path: "/",
      role: "Admin"
    },
    {
      name: "Meslekler",
      icon: "nav-icon fa fa-user-tie",
      path: "/profession",
      role: "Admin"
    },
    {
      name: "Personel",
      icon: "nav-icon fas fa-user",
      path: "/employee",
      role: "Admin"
    }    
  ]
