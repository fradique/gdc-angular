import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: string;
  password: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  validarContrasenna() {
    this.userService.login(this.user,this.password);
  }
}
