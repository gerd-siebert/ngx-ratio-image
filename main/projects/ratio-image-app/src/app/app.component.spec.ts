import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			imports: [
				BrowserAnimationsModule,
				RouterTestingModule,
				MatSidenavModule,
				MatIconModule,
				MatToolbarModule,
				MatButtonModule
			],
			declarations: [AppComponent, HeaderComponent],
			providers: provideAnimations()
		})
	);

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	xit(`should have as title 'ratioImageApp'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual('ratioImageApp');
	});
});
