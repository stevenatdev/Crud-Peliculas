import { Component } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {
  peliculas: any[] = [];


  constructor(private peliculasService: PeliculasService) {
    this.getPeliculas();
  }

  getPeliculas() {
    this.peliculasService.getTodos().subscribe((data: any) => {
      this.peliculas = data;
      console.log(this.peliculas);
    })
  }

  // Eliminar película
  eliminarPelicula(pelicula_id: number) {
    this.peliculasService.eliminar(pelicula_id).subscribe((data: any) => {
      this.getPeliculas();
    })
  }
}
