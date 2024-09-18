import { Component } from '@angular/core';
import { ActoresService } from '../services/actores.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-nuevo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './actor-nuevo.component.html',
  styleUrl: './actor-nuevo.component.css'
})
export class ActorNuevoComponent {

  actores = {
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
    nacionalidad: ''
  }

  errorMessage: string = '';

  constructor(private actorService: ActoresService, private router: Router) {
  }

  agregarPelicula() {
    this.actorService.insertar(this.actores).subscribe({
      next: (response) => {
        console.log('Actor agregado:', response);
        // Limpiar el formulario
        this.actores = {
          nombre: '',
          nacionalidad: '',
          apellido: '',
          fecha_nacimiento: ''
        };
        this.router.navigate(['/actores']);
      },
      error: (err) => {
        this.errorMessage = 'Ocurrió un error al agregar al actor.';
        console.error(err);
      }
    });
  }
}
