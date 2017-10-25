import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OmdbService {
	private apiKey: string;
	private baseUri: string;

	constructor(private http: Http, baseAPIUri: string, apiKey: string) {
		console.log('OmdbService Initializing...');

		this.apiKey = apiKey;
		this.baseUri = baseAPIUri;
	}

	private headers = new Headers({
		'Content-Type': 'application/json'
	});

	public getMovieData(movieId: string) {
		const url = `//${this.baseUri}/movie/${movieId}`;
		console.log(`Sending request to ${url}`);
		return this.http.get(url, {
			headers: this.headers
		}).map(data => data.json());
	}

	public getAllNicCageMovies() {
		const url = `//${this.baseUri}/person/${2963}/movie-credits`;
		console.log(`Sending request to ${url}`);
		return this.http.get(url, {
			headers: this.headers
		}).map(data => data.json());
	}
}
