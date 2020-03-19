import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, this.noValido]),
    age: new FormControl(),
    grupo1: new FormGroup({ ejemplo: new FormControl() })
  });

  constructor() {}

  ngOnInit(): void {}

  noValido(control: AbstractControl): ValidationErrors | null {
    if (control.value === 'mouse') return { noValido: true };
    return null;
  }

  onSubmit() {
    console.log(this.form.value);
  }

  get name() {
    return this.form.get('name');
  }
}
