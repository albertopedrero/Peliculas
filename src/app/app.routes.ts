import { Routes } from '@angular/router';
import { PrincipalPeliculas } from './peliculas/paginas/principal-peliculas/principal-peliculas';
import { PrincipalSeries } from './series/paginas/principal-series/principal-series';
import { PaginaPrincipal } from './paginaPrincipal/paginas/pagina-principal/pagina-principal';

export const routes: Routes = [
    {path: '', component: PaginaPrincipal},
    {path:'peliculas', component: PrincipalPeliculas},
    {path: 'series', component: PrincipalSeries},
    {path: '**', redirectTo: ''}
];
