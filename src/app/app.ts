import { Component, signal } from '@angular/core';
import { MenuPrincipal } from "./menuPrincipal/menu-principal/menu-principal";
import { PaginaPrincipal } from "./paginaPrincipal/paginas/pagina-principal/pagina-principal";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, MenuPrincipal, PaginaPrincipal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('peliculas');
}
