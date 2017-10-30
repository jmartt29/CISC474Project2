import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { OmdbComponent } from './omdb/omdb.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'omdb', loadChildren: './omdb/omdb.module#OmdbModule' }
	// { path: 'omdb', component: OmdbComponent }
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
