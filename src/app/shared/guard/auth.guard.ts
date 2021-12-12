import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    public authService: AuthenticationServiceService,
    public router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot): Observable<boolean> {

    // jos käyttäjällä on tarvittavat oikeudet, palautetaan true
    // jos käyttäjällä ei oikeuksia, reititetään login-sivulle
    // käyttäjän oikeudet tarkistetaan serviceltä

    return this.authService.getLoggedInUser().pipe(
      take(1),
      map(authState => Boolean(authState)),
      tap(auth => !auth ? this.router.navigate(['login']) : true)
    )

    //return true;
  }

}
