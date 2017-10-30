import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { OmdbModule } from './omdb/omdb.module';

import { AppComponent } from './app.component';
import { OmdbComponent } from './omdb/omdb.component';

import { OmdbService } from './omdb/omdb.service';
import { HomeComponent } from './home/home/home.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		// OmdbComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		// HttpModule
		OmdbModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
