import { Routes } from '@angular/router';
import { PeliculaNuevaComponent } from './pelicula-nueva/pelicula-nueva.component';
import { PeliculaEditarComponent } from './pelicula-editar/pelicula-editar.component';
import { ActorNuevoComponent } from './actor-nuevo/actor-nuevo.component';
import { ActorEditarComponent } from './actor-editar/actor-editar.component';
import { ActorComponent } from './actor/actor.component';
import { PeliculasComponent } from './peliculas/peliculas.component';

export const routes: Routes = [
    { path: '', redirectTo: '/peliculas', pathMatch: 'full' },
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'pelicula/nueva', component: PeliculaNuevaComponent },
    { path: 'pelicula/editar/:id', component: PeliculaEditarComponent },
    { path: 'actores', component: ActorComponent },
    { path: 'actor/nuevo', component: ActorNuevoComponent },
    { path: 'actor/editar/:id', component: ActorEditarComponent }
];
