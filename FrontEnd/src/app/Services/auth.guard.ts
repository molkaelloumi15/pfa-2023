import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../Model/User';
import {SignInComponent} from '../components/sign-in/sign-in.component';
import {MdbModalService} from 'mdb-angular-ui-kit/modal';
import {LogInComponent} from '../components/log-in/log-in.component';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private modalService: MdbModalService) {

    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return new Promise(
            (resolve, reject) => {
                const currentUser: User = JSON.parse(sessionStorage.getItem('currentUser'))
                if (currentUser !== null)
                    resolve(true);
                else {
                    this.modalService.open(LogInComponent);
                    resolve(false);
                }
            }
        );
    }

}
