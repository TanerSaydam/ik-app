import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutesModel } from '../components/routes/routes.model';
import { DecodeService } from '../services/decode.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private _decode: DecodeService,
    private _router: Router
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let roles = this._decode.getRoles();
    let routes = RoutesModel;

    if (roles.includes(routes.filter(p => p.path == state.url)[0].role)) {
      return true
    }

    this._router.navigateByUrl("/")
    return false;
  }

}
