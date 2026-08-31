import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', title: 'Home', loadComponent: () => import('./home.component').then(({ HomeComponent }) => HomeComponent) },
  { path: 'interactive', title: 'Interactive', loadComponent: () => import('./interactive.component').then(({ InteractiveComponent }) => InteractiveComponent) },
  { path: '**', redirectTo: '' },
];
