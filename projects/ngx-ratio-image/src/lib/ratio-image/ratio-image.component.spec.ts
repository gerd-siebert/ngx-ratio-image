import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatioImageComponent } from './ratio-image.component';

describe('RatioImageComponent', () => {
	let component: RatioImageComponent;
	let fixture: ComponentFixture<RatioImageComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [RatioImageComponent]
		});
		fixture = TestBed.createComponent(RatioImageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
