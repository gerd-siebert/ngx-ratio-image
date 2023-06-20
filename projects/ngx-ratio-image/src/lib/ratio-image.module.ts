import { NgModule } from '@angular/core';
import { RatioImageComponent } from './ratio-image/ratio-image.component';
import {NgIf} from "@angular/common";

@NgModule({
	declarations: [RatioImageComponent],
    imports: [
        NgIf
    ],
	exports: [RatioImageComponent]
})
export class RatioImageModule {}
