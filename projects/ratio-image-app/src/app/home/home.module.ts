import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { RatioImageComponent } from 'ngxRatioImage';
//  import { import { RatioImageComponent } from 'ngxRatioImage'; } from '../../../../ngx-ratio-image/src/lib/ratio-image.component';

@NgModule({
	declarations: [HomeComponent],
	imports: [HomeRoutingModule, RatioImageComponent],
	providers: []
})
export class HomeModule {}
