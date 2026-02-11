import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResultadoConsulta } from '../../interfaces/pelicula';
import { MovieSuccess } from '../../interfaces/pelicula';
import { OmdbService } from '../../servicios/omdb-service';
import { FavoritosService } from '../../../favoritos/servicios/favoritos-service';

@Component({
  selector: 'app-principal-peliculas',
  imports: [FormsModule],
  templateUrl: './principal-peliculas.html',
  styleUrl: './principal-peliculas.css',
})
export class PrincipalPeliculas {

  _omdbService = inject(OmdbService)
  _favoritosService = inject(FavoritosService)
  tituloPelicula = ''
  resultado = signal<ResultadoConsulta | null>(null);


  /*numeroVeces = 0
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
    this.numeroVeces = 0
    this._omdbService.buscar('Big Band Theory')
      .subscribe( (data:any)=>{
        console.log(data)
      })
  }*/

  buscarPelicula(titulo:string){
    this._omdbService.buscarPelicula(titulo)
      .subscribe( (data:any)=>{
            this.resultado.set(data);
            this.tituloPelicula = '';
      })
  }

  toggleFavorito(pelicula:MovieSuccess){
    this._favoritosService.addFavorito(pelicula)
  }

}
