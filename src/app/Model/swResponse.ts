import { SwFilm } from './swFilm';

export interface SwResponse {
  count: number;
  next: null;
  previous: null;
  results: SwFilm[];
}
