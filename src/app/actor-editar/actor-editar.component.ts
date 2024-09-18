import { Component } from '@angular/core';
import { ActoresService } from '../services/actores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actor-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './actor-editar.component.html',
  styleUrl: './actor-editar.component.css'
})
export class ActorEditarComponent {
  actores = {
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
    nacionalidad: ''
  }

  errorMessage: string = '';

  constructor(private actorService: ActoresService, private router: Router, private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.actorService.getUno(id).subscribe((data: any) => {
        this.actores = data;
        console.log(data);
      });
    }
  }

  agregarPelicula() {
    this.actorService.actualizar(this.actores).subscribe({
      next: (response) => {
        console.log('Actor editado:', response);
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
        this.errorMessage = 'Ocurrió un error al editar al actor.';
        console.error(err);
      }
    });
  }
}
