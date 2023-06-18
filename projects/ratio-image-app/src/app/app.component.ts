import { Component } from '@angular/core';
import { Router} from "@angular/router"; // Need for Router-Outlet etc.

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'ratioImageApp';

}
