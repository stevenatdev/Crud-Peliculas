import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private url = 'http://localhost/Peliculas/CrudPelis/controllers/pelicula.controller.php';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<any> {
    return this.http.get(`${this.url}?op=todos`);
  }

  actor(): Observable<any> {
    return this.http.get(`${this.url}?op=actor`);
  }

  getUno(pelicula_id: number): Observable<any> {
    const formData = new FormData();
    formData.append('pelicula_id', String(pelicula_id));
    return this.http.post(`${this.url}?op=uno`, formData);
  }

  insertar(pelicula: any): Observable<any> {
    const formData = new FormData();
    formData.append('titulo', String(pelicula.titulo));
    formData.append('genero', String(pelicula.genero));
    formData.append('director', String(pelicula.director));
    formData.append('actores_id', String(pelicula.actores_id));
    return this.http.post(`${this.url}?op=insertar`, formData);
  }

  actualizar(pelicula: any): Observable<any> {
    const formData = new FormData();
    formData.append('pelicula_id', String(pelicula.pelicula_id));
    formData.append('titulo', String(pelicula.titulo));
    formData.append('genero', String(pelicula.genero));
    formData.append('director', String(pelicula.director));
    formData.append('actores_id', String(pelicula.actores_id));
    return this.http.post(`${this.url}?op=actualizar`, formData);
  }

  eliminar(pelicula_id: number): Observable<any> {
    const formData = new FormData();
    formData.append('pelicula_id', String(pelicula_id));
    return this.http.post(`${this.url}?op=eliminar`, formData);
  }
}
