import { Component } from '@angular/core';
import { of, Observable, interval, Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-principal-series',
  imports: [],
  templateUrl: './principal-series.html',
  styleUrl: './principal-series.css',
})
export class PrincipalSeries {
numeros = of(1,2,3);​
contador = 0
//private subscripcion: Subscription​


constructor() {​



   of(1,2,3,4,5,6).pipe(​

      filter( (n:any) => n % 2 !== 0 ), ​

      map ( (n:any)=> n * 10)​

   ).subscribe({​

      next: (numero) => console.log(`Número: ${numero}`),​

      error: (e) => console.log(e),​

      complete: () => console.info('completado')​

  })}
}
