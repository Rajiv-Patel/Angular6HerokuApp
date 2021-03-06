
//Video#8  1:28:00 

import { Injectable, Inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()

export class RouterGaurds implements CanActivate {

    constructor(private _router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const id = +route.url[1].path;
        if (isNaN(id) || id < 1 ) {
            alert('invalid url');
            this._router.navigate(['/products']);
            return false;
        }

        return true;
    }
}