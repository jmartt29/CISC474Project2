import { Component, OnInit } from '@angular/core';
import { OmdbService } from './omdb.service';

@Component({
	selector: 'app-omdb',
	templateUrl: './omdb.component.html',
	styleUrls: ['./omdb.component.css']
})
export class OmdbComponent implements OnInit {
	public nicInfo: JSON;
	public temp: string;

	constructor(private omdb: OmdbService) { }
	// constructor() {}

	ngOnInit() {
		// this.nicInfo = OmdbComponent
		this.temp = 'test temp';
	}

	/**
	 * letsGetSomeMovies
	 */
	public letsGetSomeMovies() {
		// console.log(evt);
		// alert(this.omdb.temp);
		this.omdb.getAllNicCageMovies().subscribe(
			(success) => {
				console.log(success);
				this.temp = 'wooo';
				this.nicInfo = success.json();
			},
			(error) => {
				this.temp = 'error';
				console.error(error);
		});
	}

}
