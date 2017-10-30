import { NgModule, Component } from '@angular/core';

//import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { OmdbComponent } from './omdb.component';
import { OmdbService } from './omdb.service';

const routes: Routes = [
	{path: '', redirectTo: 'omdb', pathMatch: 'full'},
	{path: 'omdb', component: OmdbComponent},
  ];

export function Omdbfactory(http: Http) {
	return new OmdbService(http, 'api.themoviedb.org/3', '04528b6a3cf3b49d465219ee1570a501');
}


@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		// FormsModule
		RouterModule.forChild(routes) // May or may not need this
	],
	declarations: [OmdbComponent],
	providers: [{ provide: OmdbService, useFactory: Omdbfactory, deps: [Http] }],
	exports: [RouterModule]
})
export class OmdbModule { }
