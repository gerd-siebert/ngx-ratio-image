import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		title: 'Home',
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	},
	{
		path: 'interactive',
		title: 'Interactive',
		loadChildren: () => import('./interactive/interactive.module').then(m => m.InteractiveModule)
	},
	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
