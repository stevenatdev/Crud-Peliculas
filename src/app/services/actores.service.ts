import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {
  private url = 'http://localhost/Peliculas/CrudPelis/controllers/actores.controller.php';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<any> {
    return this.http.get(`${this.url}?op=todos`);
  }

  actor(): Observable<any> {
    return this.http.get(`${this.url}?op=actor`);
  }

  getUno(actores_id: number): Observable<any> {
    const formData = new FormData();
    formData.append('actores_id', String(actores_id));
    return this.http.post(`${this.url}?op=uno`, formData);
  }

  insertar(actor: any): Observable<any> {
    const formData = new FormData();
    formData.append('nombre', String(actor.nombre));
    formData.append('apellido', String(actor.apellido));
    formData.append('fecha_nacimiento', String(actor.fecha_nacimiento));
    formData.append('nacionalidad', String(actor.nacionalidad));
    return this.http.post(`${this.url}?op=insertar`, formData);
  }

  actualizar(actor: any): Observable<any> {
    const formData = new FormData();
    formData.append('actores_id', String(actor.actores_id));
    formData.append('nombre', String(actor.nombre));
    formData.append('apellido', String(actor.apellido));
    formData.append('fecha_nacimiento', String(actor.fecha_nacimiento));
    formData.append('nacionalidad', String(actor.nacionalidad));
    return this.http.post(`${this.url}?op=actualizar`, formData);
  }

  eliminar(actores_id: number): Observable<any> {
    const formData = new FormData();
    formData.append('actores_id', String(actores_id));
    return this.http.post(`${this.url}?op=eliminar`, formData);
  }
}
