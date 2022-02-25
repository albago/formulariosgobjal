import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SwapiPerson } from './interfaces/swapiperson';

@Injectable()
export class SwapiService {

  constructor(private http: HttpClient) { 

  }

  getSwapiPerson(): Observable<SwapiPerson>{
    return this.http.get<SwapiPerson>('https://swapi.dev/api/people/1');
  }
}
