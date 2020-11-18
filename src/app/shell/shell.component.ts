import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import firebase from 'firebase/app';
import 'firebase/auth';

import { AuthService } from './../auth.service';
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  user$: Observable<firebase.User>;
  redirect = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private router: Router,
    public authService: AuthService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.user$ = this.authService.user$;
  }
  onLogin(drawer) {
    this.authService.login().then(async user => {
      drawer.toggle();
      this.redirect = await this.router.navigateByUrl('/dashboard/' + user.user.providerData[0].uid);
    });

  }
  onLogout(drawer) {
    this.authService.logout();
    drawer.toggle();
    this.router.navigateByUrl('/');
  }
}
