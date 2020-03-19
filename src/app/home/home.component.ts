import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { Subscription, Observable } from 'rxjs';
import { Coronavirus } from './../model/coronavirus';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import {faPlus} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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
}
