import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
  animations: [
    trigger('fade', [state('void', style({ opacity: 0 })), transition(':enter,:leave', [animate(1000)])]),
    trigger('slide', [
      transition(':enter', [style({ transform: 'translateX(-10px)' }), animate(500)]),
      transition(':leave', [animate('0.5s ease-in', style({ transform: 'translateX(-100%)', opacity: 0 }))])
    ])
  ]
})
export class Page2Component implements OnInit {
  list = [];
  valor = 4;

  constructor() {}

  ngOnInit(): void {}

  refresh() {

    let a=2;
    let b=a+1;
    
    this.list = [{id:1,value:'Uno'},{id:2,value: 'Dos'}, {id:1,value:'Tres'}];
  }





  onDelete(item:string)
  {
    console.log(`Eliminar presionado: ${item}`);
  }

}
