import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { Subscription, Observable } from 'rxjs';
import { Coronavirus } from './../model/coronavirus';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [state('void', style({ opacity: 0 })), transition(':enter,:leave', [animate(1000)])]),
    trigger('slide', [
      transition(':enter', [style({ transform: 'translateX(-10px)' }), animate(1000)]),
      transition(':leave', [animate('0.5s ease-in', style({ transform: 'translateX(-100%)', opacity: 0 }))])
    ])
  ]
})
export class HomeComponent implements OnInit {
  faPlus = faPlus;
  faTrashAlt = faTrashAlt;
  data: Coronavirus[];
  data$: Observable<Coronavirus[]>;
  sub: Subscription;
  collection: AngularFirestoreCollection<Coronavirus>;

  constructor(private db: AngularFirestore) {}
  ngOnInit(): void {
    this.collection = this.db.collection<Coronavirus>('coronavirus');
    this.data$ = this.collection.valueChanges({ idField: 'id' });
  }

  onInfectado(itemActual: Coronavirus) {
    this.collection.doc(itemActual.id).update({ infectados: itemActual.infectados + 1 });
  }

  onAdd(pais: string) {
    this.collection.add({ pais: pais, infectados: 0 });
  }

  onDelete(item: Coronavirus) {
    this.collection.doc(item.id).delete();
  }

  trackByCoronovirus(index,item:Coronavirus){
    return item.id;
  }
}
