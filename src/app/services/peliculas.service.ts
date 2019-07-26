import { Injectable } from '@angular/core';

import { JsonpClientBackend, JsonpInterceptor, HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  /*
  Api key: 3516004e40e7344294998216120887a1
  API Read Access Token:
  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTE2MDA0ZTQwZTczNDQyO
  TQ5OTgyMTYxMjA4ODdhMSIsInN1YiI6IjVkM2E2MGE4ZTU0ZDVkMjUzM2RkOTQ3YiIsInNj
  b3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cvReNshc666Lm09q3o_y3EYRlOh1Mw
  FWcvLgS53GUzg

  key themoviedb: 3516004e40e7344294998216120887a1
  url: https://api.themoviedb.org/3

  key OMDb: 27c32221
  url: http://www.omdbapi.com/?apikey=
  
  */

  private apikey: string = '3516004e40e7344294998216120887a1';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';

  private dateDay = new Date().getFullYear();

  constructor( private jsonp: HttpClientJsonpModule, private http: HttpClient ) { }

  getPopulars( ) {

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.jsonp(`http://www.omdbapi.com/?apikey=27c32221&s=${ this.dateDay }`, 'callback');

  }

  buscarPelicula( texto: string ) {

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.jsonp(url, 'callback');

  }

}
