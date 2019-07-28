import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula: any;
  regresar: string = "";
  busqueda: string = "";

  constructor( public peliculasService: PeliculasService, private router: ActivatedRoute ) { 

    this.router.params.subscribe( params => {

      this.regresar = params['pag'];

      if ( params['busqueda'] ) {
        this.busqueda = params['busqueda'];
      }

      this.peliculasService.getPelicula(params['id'])
          .subscribe( pelicula => {
            console.log(pelicula);
            this.pelicula = pelicula;
          });
    
    });

  }

  ngOnInit() {
  }

}
