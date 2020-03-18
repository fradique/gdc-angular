import { Subscription, Observable } from 'rxjs';
import { Coronavirus } from './../model/coronavirus';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private db: AngularFirestore) {}

  data: Coronavirus[];
  data$: Observable<Coronavirus[]>;
  sub: Subscription;
  collection: AngularFirestoreCollection<Coronavirus>;

  form = new FormGroup({
    name: new FormControl('', [Validators.required, this.noValido]),
    age: new FormControl(),
    grupo1: new FormGroup({ ejemplo: new FormControl() })
  });
  ngOnInit(): void {
    this.collection = this.db.collection<Coronavirus>('coronavirus');
    this.data$ = this.collection.valueChanges({ idField: 'id' });
  }

  onInfectado(itemActual: Coronavirus) {
    this.collection.doc(itemActual.id).update({ infectados: itemActual.infectados + 1 });
  }

  onAdd(pais:string){
    this.collection.add({ pais: pais, infectados: 0 });
  }

  onDelete(item:Coronavirus){
    this.collection.doc(item.id).delete();
  }

  noValido(control: AbstractControl): ValidationErrors | null {
    if (control.value === 'mouse') return { noValido: true };
    return null;
  }

  onSubmit() {
    console.log(this.form.value);
    //this.form.get('')
  }

  get name() {
    return this.form.get('name');
  }
}
