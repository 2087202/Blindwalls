import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Mural} from '../model/mural.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of";

const API_URL = 'https://api.blindwalls.gallery/apiv2/murals';

@Injectable()
export class MuralsService {

  constructor(private http: Http) {

  }

  getMurals(): Observable<Mural[]> {
      return this.http.get(API_URL)
          .map(result => result.json())
          .catch(err => {
      console.log('Error! Did you forget to start json-server? Run `npm run json-server` to start the server', err);
      return Observable.of([]);
          });
  }

}
