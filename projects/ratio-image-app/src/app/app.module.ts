import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {RatioImageModule} from 'ngxRatioImage';

// import {RatioImageModule} from "../../../ngx-ratio-image/src/lib/ratio-image.module";

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, RatioImageModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
