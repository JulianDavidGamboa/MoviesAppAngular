import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public peliculas: any[] = [];

  constructor( private peliculasService: PeliculasService ) { }

  ngOnInit() {

    this.peliculasService.getPopulars()
        .subscribe((res: any) => {
          console.log(res.Search[0].Poster);
          this.peliculas = res;
    });

  }

}
