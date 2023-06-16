import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'ratioImageApp';
	image1to1 = 'assets/1to1.jpg';
	image3to4 = 'assets/3to4.jpg';
	image4to3 = 'assets/4to3.jpg';
}
