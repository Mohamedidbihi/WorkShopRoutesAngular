import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import { FakeAuthService } from '../services/fake-auth.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanActivateChild  {

  
  constructor(private authService: FakeAuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then(
      (authenticated: boolean) => {
        if(authenticated) {
          return true;
        } else {
          this.router.navigate(['/']).then();
          return false;
        }
      }
    );
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
