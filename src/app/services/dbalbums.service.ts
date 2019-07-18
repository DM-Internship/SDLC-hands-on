import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DBAlbumsService implements InMemoryDbService {
  createDb() {
    const albums = [];

    return albums;
  }

  constructor() { }
}
