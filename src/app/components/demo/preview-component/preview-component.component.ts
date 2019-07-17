import { Component, OnInit } from '@angular/core';
import { InMemoryDataService } from '../../../services/in-memory-data.service'

@Component({
  selector: 'app-preview-component',
  templateUrl: './preview-component.component.html',
  styleUrls: ['./preview-component.component.css']
})
export class PreviewComponentComponent implements OnInit {

  testOutput: {};

  constructor(private dbService: InMemoryDataService) { }

  testDB(): void {
    console.log(this.dbService.createDb())
    this.testOutput = this.dbService.createDb().heroes[0].id;
    
  }

  ngOnInit() {
    this.testDB();
  }

}
