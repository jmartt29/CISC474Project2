import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, HttpModule } from '@angular/http';
//import { Routes, RouterModule } from '@angular/router';

/* HIS EXAMPLE FOR ROUTES
const routes: Routes = [
  {path: '', redirectTo: 'artist'},
  {path: 'artist', component: ArtistsComponent},
  {path: 'track', component: TracksComponent}
];*/

export function OMDBfactory(http: Http){
  return new OMDBService(http, 'http://www.omdbapi.com/');
}

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [{provide: OMDBService, useFactory: OMDBfactory, deps: [Http]}],
})
export class OmdbModule { }
