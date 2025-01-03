import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  // i18nSelect
  public name: string = 'Diego';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient (): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  /* i18nPlural */

  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Elvira', 'Diego', 'Melissa'];

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  /* KeyValue pipe */

  public person = {
    name: 'Diego',
    age: 35,
    address: 'Ottawa, Canada'
  }

  /* Async pipe */
  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log('tap:', value) )
  ); // 0,1,2,3,4,5...

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
    }, 3500);
  });
}
