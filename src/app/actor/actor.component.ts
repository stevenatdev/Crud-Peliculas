import { Component } from '@angular/core';
import { ActoresService } from '../services/actores.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-actor',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './actor.component.html',
  styleUrl: './actor.component.css'
})
export class ActorComponent {
  actores: any[] = [];


  constructor(private actorService: ActoresService) {
    this.getActor();
  }

  getActor() {
    this.actorService.getTodos().subscribe((data: any) => {
      this.actores = data;
      console.log(this.actores);
    })
  }

  // Eliminar película
  eliminarActor(actores_id: number) {
    this.actorService.eliminar(actores_id).subscribe((data: any) => {
      this.getActor();
    })
  }
}
