import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { OmdbService } from './omdb.service';

/* HIS EXAMPLE FROM REST2
const routes: Routes = [
  {path: '', redirectTo: 'artist'},
  {path: 'artist', component: ArtistsComponent},
  {path: 'track', component: TracksComponent}
];*/

export function Omdbfactory(http: Http){
  return new OmdbService(http, 'http://www.omdbapi.com/');
}


@NgModule({
  imports: [
    CommonModule,
    HttpModule
    //,RouterModule.forChild(routes)
  ],
  declarations: [],
  providers: [{provide: OmdbService, useFactory: Omdbfactory, deps: [Http]}],
  exports: [RouterModule]
})
export class OmdbModule { }
