import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

import { ResultadoConsulta } from '../interfaces/pelicula';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OmdbService {
  httpClient = inject(HttpClient)

  buscarPelicula(termino:string):Observable<ResultadoConsulta>{
    return this.httpClient.get<ResultadoConsulta>(environment.omdbUrl + '?type="movie"&t="'+ termino + '"' + '&plot="full"&apikey=' + environment.omdbApiKey)
  }

  buscarSerie(termino:string):Observable<ResultadoConsulta>{
    return this.httpClient.get<ResultadoConsulta>(environment.omdbUrl + '?type="series"&t="'+ termino + '"' + '&plot="full"&apikey=' + environment.omdbApiKey)
  }
}
