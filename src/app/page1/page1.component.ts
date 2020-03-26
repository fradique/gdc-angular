import { FilmsService } from './../films.service';
import { Component, OnInit } from '@angular/core';
import { SwResponse } from '../Model/swResponse';
import { SwFilm } from '../Model/swFilm';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  films:SwFilm[];

  constructor(private filmsService:FilmsService) { }

  ngOnInit(): void {
          this.filmsService.getFilms().subscribe(r => (this.films = r));

  }

}
