import { SwFilm } from './model/swFilm';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwResponse } from './Model/swResponse';
import {map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  constructor(private httpClient: HttpClient) {}

  getFilms():Observable<SwFilm[]> {
    return this.httpClient.get<SwResponse>('https://swapi.co/api/films')
          .pipe(
            map(res=>res.results)
          );
  }
}
