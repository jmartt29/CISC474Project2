import { Component, OnInit } from '@angular/core';
import { OmdbService } from './omdb.service';

@Component({
	selector: 'app-omdb',
	templateUrl: './omdb.component.html',
	styleUrls: ['./omdb.component.css']
})
export class OmdbComponent implements OnInit {
	public nicInfo: JSON;

	constructor(private omdb: OmdbService) { }

	ngOnInit() {
		//
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
				this.nicInfo = success;

				// console.group('temp');
				// for (const x of success.cast) {
				// 	console.log(x);
				// }
				// console.groupEnd();
			},
			(error) => {
				console.error(error);
		});
	}

}
