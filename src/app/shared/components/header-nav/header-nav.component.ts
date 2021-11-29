import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css'],
})
export class HeaderNavComponent implements OnInit {
  mainMenu: {
    defaultOptions: Array<any>;
  } = { defaultOptions: [] };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'weather'],
      },
      {
        name: 'About',
        icon: 'uil uil-info-circle',
        router: ['/', 'about'],
      },
      {
        name: 'Login',
        icon: 'uil uil-user',
        router: ['/', 'login'],
      },
    ];
  }
}
