import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  modelName:string;
  modelAge:string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form:NgForm) {
    console.log(this.modelName, this.modelAge);
    console.log(form.value);
  }
}
