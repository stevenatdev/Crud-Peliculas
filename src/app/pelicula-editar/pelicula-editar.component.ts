import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pelicula-editar',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './pelicula-editar.component.html',
  styleUrl: './pelicula-editar.component.css'
})
export class PeliculaEditarComponent {
  actores: any[] = [];

  pelicula = {
    titulo: '',
    director: '',
    actores_id: '',
    genero: ''
  }

  errorMessage: string = '';

  constructor(private peliculasService: PeliculasService, private route: ActivatedRoute, private router: Router) {
    this.getActores();

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.peliculasService.getUno(id).subscribe((data: any) => {
        this.pelicula = data;
        console.log(data);
      });
    }
  }

  getActores() {
    this.peliculasService.actor().subscribe((data: any) => {
      this.actores = data;
      console.log(data);
    })
  }

  // editar

  editarPelicula() {
    this.peliculasService.actualizar(this.pelicula).subscribe({
      next: (response) => {
        console.log('Película editada:', response);
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
        this.errorMessage = 'Ocurrio un error al editar la dirección.';
        console.error(err);
      }
    });
  }
}
