import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {RatioImageModule} from 'ngxRatioImage';
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module";


// import {RatioImageModule} from "../../../ngx-ratio-image/src/lib/ratio-image.module";

@NgModule({
	declarations: [ HomeComponent],
	imports: [ HomeRoutingModule, RatioImageModule],
	providers: [],
})
export class HomeModule {
}
