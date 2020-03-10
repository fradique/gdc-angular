import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwResponse } from '../Model/swResponse';
import { SwFilm } from '../Model/swFilm';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  films:SwFilm[];

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
      this.httpClient.get<SwResponse>('https://swapi.co/api/films')
          .subscribe(r=>this.films=r.results);

  }

}
