import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { RatioImageComponent } from 'ngxRatioImage';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HomeComponent],
			imports: [HomeRoutingModule, RatioImageComponent]
		}).compileComponents();
		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
