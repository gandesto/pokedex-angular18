import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { PokemonResults } from '../../models/pokemon';
import { error } from 'console';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<PokemonResults> {
    return this.http
      .get<PokemonResults>(
        `${environment.apiUrlBase}pokemon?limit=100&offset=0`
      )
      ;
  }
}
