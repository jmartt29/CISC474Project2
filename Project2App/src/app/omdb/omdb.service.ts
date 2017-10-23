import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OmdbService {
  baseUri: string;

  private headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http, baseAPIUri: string) {
    this.baseUri = baseAPIUri;
  }
}
