import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform( pelicula: any, poster: boolean = false ): any {

    let url = "http://image.tmdb.org/t/p/w500";

    if ( poster ) {
      return url + pelicula.backdrop_path;
    }

    if( pelicula.backdrop_path ) {
      return url + pelicula.backdrop_path;
    } else {
      if( pelicula.backdrop_path ) {
        return url + pelicula.backdrop_path;
      } else {
        return "assets/img/error.gif";
      }
    }
  }

}
