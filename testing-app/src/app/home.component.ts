import { Component } from '@angular/core';
import { RatioImageComponent } from 'ngx-ratio-image';

@Component({
  selector: 'app-home',
  imports: [RatioImageComponent],
  template: `<h1>View-Area 4:3</h1>
    <h2>Image 1:1</h2><ngx-ratio-image [src]="image1to1" [width]="800" [height]="450" />
    <hr /><h2>Image 3:4</h2><ngx-ratio-image [src]="image3to4" [width]="800" [height]="450" />
    <hr /><h2>Image 4:3</h2><ngx-ratio-image [src]="image4to3" [width]="800" [height]="600" />
    <hr /><h1>16:9 View-Area</h1><h2>Image 4:3 (with debug)</h2>
    <ngx-ratio-image [src]="image4to3" [width]="800" [height]="450" [debug]="true" />
    <h2>Online Resource</h2><ngx-ratio-image [src]="onlineImage" [width]="800" [height]="450" />`,
  styles: `:host { display: block; padding: 1rem; }`,
})
export class HomeComponent {
  protected readonly image1to1 = 'assets/1to1.jpg';
  protected readonly image3to4 = 'assets/3to4.jpg';
  protected readonly image4to3 = 'assets/4to3.jpg';
  protected readonly onlineImage = 'https://dummyimage.com/800x600';
}
