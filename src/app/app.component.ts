import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  showNav=false;
  title = 'Mundo';
  arreglo = ['Uno', 'Dos', 'tres'];

  constructor(public user:UserService){}

  add() {
    this.arreglo.push('cuatro');
  }
}
