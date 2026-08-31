import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { InteractiveModule } from './interactive/interactive.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [AppComponent, HeaderComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HomeModule,
		InteractiveModule,
		MatSidenavModule,
		MatIconModule,
		MatToolbarModule,
		MatButtonModule
	],
	providers: [],
	exports: [HomeModule, InteractiveModule],
	bootstrap: [AppComponent]
})
export class AppModule {}
