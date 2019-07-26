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
  
  
  */

  private apikey: string = '3516004e40e7344294998216120887a1';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';

  constructor() { }
}
