import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {RatioImageModule} from 'ngxRatioImage';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeModule} from "./home/home.module";
import {InteractiveModule} from "./interactive/interactive.module";

// import {RatioImageModule} from "../../../ngx-ratio-image/src/lib/ratio-image.module";

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule,
		RatioImageModule, BrowserAnimationsModule,
		 HomeModule, InteractiveModule],
	providers: [],
	exports: [HomeModule, InteractiveModule],
	bootstrap: [AppComponent]
})
export class AppModule {
}
