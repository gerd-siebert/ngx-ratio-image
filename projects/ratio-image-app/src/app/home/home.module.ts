import {NgModule} from '@angular/core';

import {RatioImageModule} from 'ngxRatioImage';
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module";

@NgModule({
	declarations: [ HomeComponent],
	imports: [ HomeRoutingModule, RatioImageModule],
	providers: [],
})
export class HomeModule {
}
