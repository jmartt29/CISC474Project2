import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OmdbService {
	private baseUri: string;
	private apiKey: string;

	constructor(private http: Http, baseAPIUri: string) {
		this.baseUri = baseAPIUri;
		this.apiKey = '15a1bcb7';
	}

	private headers = new Headers({
		'Content-Type': 'application/json'
	});

	public getData() {
		return this.http.get(`${this.baseUri}/getAPILink`, {
			headers: this.headers
		}).map(data => data.json());
	}
}
