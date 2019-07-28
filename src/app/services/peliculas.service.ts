import { Injectable } from '@angular/core';

import { JsonpClientBackend, JsonpInterceptor, HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey: string = '3516004e40e7344294998216120887a1';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';

  peliculas: any[] = [];

  constructor( private jsonp: HttpClientJsonpModule, private http: HttpClient ) { }

  getCartelera() {

    let desde = new Date();
    let hasta = new Date();
    hasta.setDate( hasta.getDate() + 7 );

    let desdeStr = `${ desde.getFullYear() }-${ desde.getMonth()+1 }-${ desde.getDate() }`;
    let hastaStr = `${ hasta.getFullYear() }-${ hasta.getMonth()+1 }-${ hasta.getDate() }`;

    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=${ this.apikey }&language=es`;

    return this.http.jsonp(url, 'callback');

  }

  getPopulars( ) {

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.jsonp(url, 'callback');

  }

  getPopularsChilds( ) {

    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.jsonp(url, 'callback');

  }

  buscarPelicula( texto: string ) {

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.get(url).pipe(
      map( res => {
        this.peliculas = res['results'];
        console.log(this.peliculas);
        return res['results'];
      }));

  }

  getPelicula( id: string ) {

    let url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&language=es`;

    return this.http.jsonp(url, 'callback');

  }



}
