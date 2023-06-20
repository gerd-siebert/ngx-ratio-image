import { NgModule } from '@angular/core';

import { InteractiveComponent } from './interactive.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { InteractiveRoutingModule } from './interactive-routing.module';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NgForOf } from '@angular/common';

// import {RatioImageModule} from 'ngxRatioImage';
import { RatioImageModule } from '../../../../ngx-ratio-image/src/lib/ratio-image.module';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
	declarations: [InteractiveComponent],
	imports: [
		InteractiveRoutingModule,
		RatioImageModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
		MatOptionModule,
		MatSelectModule,
		NgForOf,
		MatGridListModule
	],
	providers: []
})
export class InteractiveModule {}
