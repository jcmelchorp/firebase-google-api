import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MAT_DRAWER_CONTAINER } from '@angular/material/sidenav/drawer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private router: Router,
    public authService: AuthService,
    private breakpointObserver: BreakpointObserver
  ) { }
  onLogin(drawer) {
    this.authService.login();
    drawer.toggle();
    this.router.navigateByUrl('/dashboard');
  }
  onLogout(drawer) {
    this.authService.logout();
    drawer.toggle();
    this.router.navigateByUrl('/');
  }
}
