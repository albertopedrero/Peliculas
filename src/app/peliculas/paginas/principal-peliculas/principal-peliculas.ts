import { Component, computed, signal } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-principal-peliculas',
  imports: [FormsModule],
  templateUrl: './principal-peliculas.html',
  styleUrl: './principal-peliculas.css',
})
export class PrincipalPeliculas {

  tituloPelicula = ''
  numeroVeces = 0
  misPeliculas = signal(<Pelicula[]>[])
  totalPeliculas = computed(() => {
    return this.misPeliculas().length
  })
  anadirPelicula(titulo:string, veces:string){
    let nuevaPelicula:Pelicula = {
      titulo: titulo,
      veces: parseInt(veces)
    }
    this.misPeliculas.update((listadoAntiguo) => [...listadoAntiguo, nuevaPelicula] )
    this.tituloPelicula = ''
    this.numeroVeces = 0
  }

}
