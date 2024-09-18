import { Component } from '@angular/core';
import { ActoresService } from '../services/actores.service';
import { RouterLink } from '@angular/router';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

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

  generarPDF() {
    const doc = new jsPDF();
    doc.text('Reporte de Actores', 10, 10);

    const columnas = ['Nombre', 'Apellido', 'Fecha de Nacimiento', 'Nacionalidad'];
    const filas: any[] = [];

    this.actores.forEach((actor) => {
      filas.push([actor.nombre, actor.apellido, actor.fecha_nacimiento, actor.nacionalidad]);
    });

    // AutoTable genera la tabla dentro del PDF
    (doc as any).autoTable({
      head: [columnas],
      body: filas
    });

    // Guardar el archivo
    doc.save('reporte_actores.pdf');
  }
}
