import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteractiveComponent } from './interactive.component';

const routes: Routes = [
	{
		path: '',
		component: InteractiveComponent,
		title: 'Interactive'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class InteractiveRoutingModule {}
