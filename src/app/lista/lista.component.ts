import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  @Input() list: [];
  @Output() eliminar = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onDelete(item: string) {
    this.eliminar.emit(item);
  }
}
