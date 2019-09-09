import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { AppUser } from '../model/app-user';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  shoppingCartItemCount: number;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.appUser$.subscribe(appuser => this.appUser = appuser);
  }
  logout() {
    this.auth.logout();
  }
}
