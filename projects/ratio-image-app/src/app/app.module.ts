import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RatioImageModule } from 'ngxRatioImage';
import { InteractiveComponent } from './interactive/interactive.component';
import { HomeComponent } from './home/home.component';

// import {RatioImageModule} from "../../../ngx-ratio-image/src/lib/ratio-image.module";

@NgModule({
	declarations: [AppComponent, InteractiveComponent, HomeComponent],
	imports: [BrowserModule, AppRoutingModule, RatioImageModule],
	exports: [RatioImageModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
