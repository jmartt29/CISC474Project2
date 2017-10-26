import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OmdbService {
	private apiKey: string;
	private baseUri: string;
	private params: URLSearchParams;

	constructor(private http: Http, baseAPIUri: string, apiKey: string) {
		console.log('OmdbService Initializing...');

		this.apiKey = apiKey;
		this.baseUri = baseAPIUri;

		this.params = new URLSearchParams();
		this.params.set('api_key', this.apiKey);
		this.params.set('language', 'en-US');
	}

	private headers = new Headers({
		'Content-Type': 'application/json'
	});

	public getMovieData(movieId: string) {
		const url = `//${this.baseUri}/movie/${movieId}`;

		console.log(`Sending request to ${url}`);
		return this.http.get(url, {
			// headers: this.headers
			params: this.params
		}).map(data => data.json());
	}

	public getAllNicCageMovies() {
		const url = `//${this.baseUri}/person/${2963}/movie_credits`;

		console.log(`Sending request to ${url}?${this.params}`);
		return this.http.get(url, {
			// headers: this.headers
			params: this.params// ,
			// search: this.params
		}).map(data => {
			const da = data.json();
			// for(const d of da.cast) {
				// Stupid API hack...
				// TODO: get configuration options and make them options in the service/factory
				// choose appropriate size from options
				// see: https://api.themoviedb.org/3/configuration?api_key=04528b6a3cf3b49d465219ee1570a501
				// d.backdrop_path = `//image.tmdb.org/t/p/w300${d.backdrop_path}?${this.params}`;
			// }
			return da;
		});
	}
}
