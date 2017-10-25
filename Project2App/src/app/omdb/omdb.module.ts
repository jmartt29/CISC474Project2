import { NgModule, Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { OmdbComponent } from './omdb.component';

import { OmdbService } from './omdb.service';

/* HIS EXAMPLE FROM REST2
const routes: Routes = [
  {path: '', redirectTo: 'artist'},
  {path: 'artist', component: ArtistsComponent},
  {path: 'track', component: TracksComponent}
];*/

export function Omdbfactory(http: Http) {
	// return new OmdbService(http, 'www.omdbapi.com/3', '04528b6a3cf3b49d465219ee1570a501');
	return new OmdbService(http, 'afdsa');
	// return new OmdbService(http);
}


@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		// FormsModule
		// ,RouterModule.forChild(routes)
	],
	declarations: [OmdbComponent],
	providers: [{ provide: OmdbService, useFactory: Omdbfactory, deps: [Http] }],
	// providers: [{ provide: OmdbService, useFactory: Omdbfactory }],
	exports: [RouterModule]
})
export class OmdbModule { }
