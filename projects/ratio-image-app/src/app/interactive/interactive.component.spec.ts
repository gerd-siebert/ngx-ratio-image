import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveComponent } from './interactive.component';
import { InteractiveRoutingModule } from './interactive-routing.module';
import { RatioImageModule } from '../../../../ngx-ratio-image/src/lib/ratio-image.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NgForOf } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('InteractiveComponent', () => {
	let component: InteractiveComponent;
	let fixture: ComponentFixture<InteractiveComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
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
			providers: [provideAnimations()]
		});
		fixture = TestBed.createComponent(InteractiveComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
