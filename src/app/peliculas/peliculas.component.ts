import { Component } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

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

  generarPDF() {
    const doc = new jsPDF();
    doc.text('Reporte de Películas', 10, 10);

    const columnas = ['Título', 'Género', 'Director', 'Actor'];
    const filas: any[] = [];

    this.peliculas.forEach((pelicula) => {
      filas.push([pelicula.titulo, pelicula.genero, pelicula.director, `${pelicula.actor} ${pelicula.apellidos}`]);
    });

    // AutoTable genera la tabla dentro del PDF
    (doc as any).autoTable({
      head: [columnas],
      body: filas
    });

    // Guardar el archivo
    doc.save('reporte_peliculas.pdf');
  }
}
