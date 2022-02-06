import { Injectable } from '@angular/core';
import { AdminauthenticationService } from './adminauthentication.service';
@Injectable({
  providedIn: 'root'
})
export class AdminauthGuardService {
  constructor(
    public authenticationService: AdminauthenticationService
      ) {}

  canActivate(): boolean {
    return this.authenticationService.isAuthenticated();
  }

}