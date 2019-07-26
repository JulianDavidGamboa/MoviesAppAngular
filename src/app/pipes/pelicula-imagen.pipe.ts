import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform( pelicula: any ): any {

    if( pelicula.poster ) {
      return pelicula.poster;
    } else {
      if( pelicula.poster ) {
        return pelicula.poster;
      } else {
        return "assets/img/error.gif";
      }
    }

    return null;
  }

}
