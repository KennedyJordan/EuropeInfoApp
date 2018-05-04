import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class CountriesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CountriesProvider Provider');
  }

  GetCountriesData():Observable<any>{
    return this.http.get('https://jsonblob.com/api/jsonblob/e63982e0-4f1b-11e8-8766-bd62b6bccc61');
  }

}
