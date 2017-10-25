import { Component, OnInit } from '@angular/core';
import { OmdbService } from './omdb.service';

@Component({
	selector: 'app-omdb',
	templateUrl: './omdb.component.html',
	styleUrls: ['./omdb.component.css'],
	providers: [OmdbService]
})
export class OmdbComponent implements OnInit {
	private nicInfo: JSON;

	constructor(private omdb: OmdbService) { }
	// constructor() {}

	ngOnInit() {
		// this.nicInfo = OmdbComponent
	}

	/**
	 * letsGetSomeMovies
	 */
	public letsGetSomeMovies() {
		// console.log(evt);
		alert(this.omdb.temp);
		// this.omdb.getAllNicCageMovies().subscribe(
		// 	(success) => {
		// 		console.log(success);
		// 		this.nicInfo = success.json();
		// 	},
		// 	(error) => {
		// 		console.error(error);
		// });
	}

}
