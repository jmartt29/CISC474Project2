import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OmdbService {
	private apiKey: string;
	private baseUri: string;

	constructor(private http: Http, baseAPIUri: string) {
		this.apiKey = '15a1bcb7';
		this.baseUri = baseAPIUri;
	}

	private headers = new Headers({
		'Content-Type': 'application/json'
	});

	public getMovieData(movieData: string) {
		// const movie: string = 'test';
		return this.http.get(`${this.baseUri}/movie/${movieData}`, {
			headers: this.headers
		}).map(data => data.json());
	}
}
