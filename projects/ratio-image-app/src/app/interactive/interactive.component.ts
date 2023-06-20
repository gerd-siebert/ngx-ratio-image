import { Component } from '@angular/core';

interface Image {
	value: string;
	viewValue: string;
}
interface Container {
	width: number;
	height: number;
	viewValue: string;
}


@Component({
  selector: 'app-interactive',
  templateUrl: './interactive.component.html',
  styleUrls: ['./interactive.component.scss']
})
export class InteractiveComponent {
	images: Image[] = [
		{value: 'assets/1to1.jpg', viewValue: 'File: 1 : 1'},
		{value: 'assets/3to4.jpg', viewValue: 'File: 3 : 4'},
		{value: 'assets/4to3.jpg', viewValue: 'File: 4 : 3'},
		{value: 'https://dummyimage.com/800x600', viewValue: 'Online: 4:3 '},
		{value: 'https://dummyimage.com/800x450', viewValue: 'Online: 16:9 '},
	];
	containers: Container[] = [
		{width: 800, height: 600,  viewValue: '800 x 600'},
		{width: 600, height: 800,  viewValue: '600 x 800'},


	];
	selectedImage = this.images[0].value;
	selectedContainer: Container =  this.containers[0];
}
