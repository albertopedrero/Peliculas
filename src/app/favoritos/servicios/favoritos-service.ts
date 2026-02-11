import { effect, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { MovieSuccess } from '../../peliculas/interfaces/pelicula';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {
  peliculasFavoritas = signal<MovieSuccess[]>(this.cargarPeliculas())

  private cargarPeliculas(){
    const peliculas = localStorage.getItem(environment.STORAGE_KEY)
    return peliculas ? JSON.parse(peliculas): []
  }
  
  guardarPeliculas = effect(() => {
    const favoritas = this.peliculasFavoritas()
    localStorage.setItem(environment.STORAGE_KEY, JSON.stringify(favoritas))
    console.log('actualizado localStorage')
  })
  addFavorito(movie: MovieSuccess) {
    this.peliculasFavoritas.update(listaActual => [...listaActual, movie]);
  }

  removeFavorite(title: string) {
  // .filter() devuelve siempre una nueva referencia de array (inmutable)
  // excluyendo la película que coincida con el término de búsqueda -título en este caso-
    this.peliculasFavoritas.update(listaActual => 
      listaActual.filter(movie => movie.Title !== title)
    );
  }
}




