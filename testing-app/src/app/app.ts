import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { map } from 'rxjs';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly breakpointObserver = inject(BreakpointObserver);
  protected readonly isHandset = toSignal(this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(({ matches }) => matches)), { initialValue: false });
}
