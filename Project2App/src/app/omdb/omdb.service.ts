import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OmdbService {
	/*private*/ apiKey: string;
	/*private*/ baseUri: string;

	public temp: string;

	constructor(private http: Http, baseAPIUri: string) { // , apiKey: string) { // I DONT KNOW WHY THIS DOESNT WORK
	// constructor(private http: Http) {
		console.log('OmdbService Initializing...');

		// this.apiKey = apiKey;
		this.baseUri = baseAPIUri;
		this.temp = 'temp';
	}

	private headers = new Headers({
		'Content-Type': 'application/json'
	});

	public getMovieData(movieId: string) {
		// const movie: string = 'test';
		return this.http.get(`${this.baseUri}/movie/${movieId}`, {
			headers: this.headers
		}).map(data => data.json());
	}

	public getAllNicCageMovies() {
		return this.http.get(`${this.baseUri}/person/${2963}/movie-credits`, {
			headers: this.headers
		}).map(data => data.json());
	}
}
