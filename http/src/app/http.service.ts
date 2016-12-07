import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get('https://http-angular2-f339c.firebaseio.com/title.json')
      .map(t => t.json());
  }

  sendData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://http-angular2-f339c.firebaseio.com/data.json', body, {
      headers: headers
    }).map(t => t.json())
      .catch(this.handleError);
  }

  getOwnData() {
    return this.http.get('https://http-angular2-f339c.firebaseio.com/data.json')
      .map(t => t.json());
  }

  private handleError(error: any) {
    console.log(error);
    return Observable.throw(error);
  }
}
