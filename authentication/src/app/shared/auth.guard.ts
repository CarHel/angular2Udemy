import { Authservice } from './auth.service';
import { Observable } from 'rxjs/Rx';
import{Injectable} from "@angular/core";
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate{

constructor(private authService:Authservice){

}

canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|boolean{
return this.authService.isAuthenticated();
}

}