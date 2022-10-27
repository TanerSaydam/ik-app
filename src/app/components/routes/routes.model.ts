export class RModel{
    name: string = "";
    path: string = "";
    icon: string = "";
}

export const RoutesModel:RModel[] = [
    {
      name: "Ana Sayfa",
      icon: "nav-icon fas fa-home",
      path: "/"
    },
    {
      name: "Meslekler",
      icon: "nav-icon fa fa-user-tie",
      path: "/profession"
    },
    {
      name: "Personel",
      icon: "nav-icon fas fa-user",
      path: "/employee"
    }    
  ]
