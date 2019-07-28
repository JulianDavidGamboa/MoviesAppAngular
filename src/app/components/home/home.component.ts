import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  popularsChilds: any;

  constructor( private peliculasService: PeliculasService ) { }

  ngOnInit() {

    this.peliculasService.getCartelera()
        .subscribe((res: any) => {
          this.cartelera = res.results;
    });

    this.peliculasService.getPopulars()
        .subscribe((res: any) => {
          this.populares = res.results;
    });

    this.peliculasService.getPopularsChilds()
        .subscribe((res: any) => {
          this.popularsChilds = res.results;
    });

  }

}
