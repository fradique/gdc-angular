import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  title = 'Mundo';
  arreglo=["Uno","Dos","tres"]

  add()
  {
    this.arreglo.push("cuatro");
  }
}
