import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const heroes = [
      { id: 1, name: 'Dr Nice'},
      { id: 2, name: 'Magneta'}
    ];

    return {heroes};
  }

  constructor() { }
}
