import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OmdbComponent } from './omdb/omdb.component';

const routes: Routes = [
	{ path: '', redirectTo: 'omdb', pathMatch: 'full' },
	{ path: 'omdb', component: OmdbComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
