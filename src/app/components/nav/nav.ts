import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
    routerLinkActive = signal('home');
    routerLinkActiveClass = signal('active');
  constructor(private router: Router){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.routerLinkActive.set(event.urlAfterRedirects.split('/')[1]);
      }
    });
  }    
}
