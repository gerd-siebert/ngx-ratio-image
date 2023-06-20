import { NgModule } from '@angular/core';
import { RatioImageComponent } from './ratio-image/ratio-image.component';
import { DecimalPipe, NgIf } from '@angular/common';

@NgModule({
	declarations: [RatioImageComponent],
	imports: [NgIf, DecimalPipe],
	exports: [RatioImageComponent]
})
export class RatioImageModule {}
