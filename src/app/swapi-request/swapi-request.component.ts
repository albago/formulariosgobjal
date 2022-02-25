import { Component, OnInit } from '@angular/core';
import { SwapiPerson } from '../interfaces/swapiperson';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-swapi-request',
  templateUrl: './swapi-request.component.html',
  styles: [
  ]
})
export class SwapiRequestComponent implements OnInit {

  swapiresp!: SwapiPerson;

  constructor(
    private swapiService: SwapiService
  ) { }

  ngOnInit(): void {
    console.log('Cargando Swapi...');
    this.swapiService.getSwapiPerson().subscribe(resp => {
      console.log(resp);
      console.log(resp.name);
      this.swapiresp = resp;
      console.log(this.swapiresp.films);
    });
  }


}
