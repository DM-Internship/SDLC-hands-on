import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const heroes = [
      { id: 1, name: 'Dr Nice'},
      { id: 2, name: 'Magneta'}
    ];

    return {heroes};
  }

  constructor() { }
}
