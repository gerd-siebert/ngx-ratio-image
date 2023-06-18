import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InteractiveComponent} from "./interactive/interactive.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [

	{ path: '', component: HomeComponent, pathMatch: 'full' },
	{ path: 'interactive', component: InteractiveComponent },
	{ path: '**', redirectTo: '' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
