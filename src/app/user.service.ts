import { UserData } from './model/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: UserData;
  constructor() {}

  get isLoggedIn(){
    if (this.currentUser)
       return true;
    let local:string = localStorage.getItem('user');

    if(local)
      {
        this.currentUser=JSON.parse(local);
        return true;
      }

      return false;
  }

  logout()
  {
    this.currentUser=null;
    localStorage.removeItem('user');
  }

  login(user: string, password: string) {
    //if (user == 'usuario' && password === 'pass') {
      this.currentUser = { username: user, password: password };
      localStorage.setItem('user',JSON.stringify(this.currentUser))
  }
}
