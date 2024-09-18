import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-pelicula-nueva',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './pelicula-nueva.component.html',
  styleUrl: './pelicula-nueva.component.css'
})
export class PeliculaNuevaComponent {
  actores: any[] = [];

  pelicula = {
    titulo: '',
    director: '',
    actores_id: '',
    genero: ''
  }

  errorMessage: string = '';

  constructor(private peliculasService: PeliculasService, private router: Router) {
    this.getActores();
  }

  getActores() {
    this.peliculasService.actor().subscribe((data: any) => {
      this.actores = data;
      console.log(data);
    })
  }

  agregarPelicula() {
    this.peliculasService.insertar(this.pelicula).subscribe({
      next: (response) => {
        console.log('Película agregada:', response);
        // Limpiar el formulario
        this.pelicula = {
          titulo: '',
          genero: '',
          director: '',
          actores_id: ''
        };

        this.router.navigate(['/peliculas']);
      },
      error: (err) => {
        this.errorMessage = 'Ocurrió un error al agregar la película.';
        console.error(err);
      }
    });
  }
}
