import { AuthService } from './../servicios/auth.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService) {}

  
     logeando() {
       this.authService.login()
     }




}
