import { Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatIconModule, MatToolbarModule],
  template: `<mat-toolbar color="primary">
    <button mat-icon-button aria-label="Navigation öffnen" (click)="sidenavToggle.emit()"><mat-icon>menu</mat-icon></button>
    <h1>ngx-ratio-image Test App</h1>
  </mat-toolbar>`,
  styles: `h1 { font-size: 1.25rem; margin: 0; }`,
})
export class HeaderComponent {
  readonly sidenavToggle = output<void>();
}
