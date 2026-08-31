import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { RatioImageComponent } from 'ngx-ratio-image';

interface ImageOption { value: string; viewValue: string; }
interface ContainerOption { width: number; height: number; viewValue: string; }

@Component({
  selector: 'app-interactive',
  imports: [FormsModule, MatFormFieldModule, MatGridListModule, MatSelectModule, RatioImageComponent],
  template: `<mat-grid-list cols="2" rowHeight="150px" gutterSize="50px" class="controls">
    <mat-grid-tile><form><h3>Container Format</h3><mat-form-field><mat-label>Image formats</mat-label>
      <mat-select [ngModel]="selectedContainer()" (ngModelChange)="selectedContainer.set($event)" name="container" required>
        @for (container of containers; track container.viewValue) { <mat-option [value]="container">{{ container.width }} x {{ container.height }}</mat-option> }
      </mat-select></mat-form-field><h4>Current container: {{ selectedContainer().viewValue }} ({{ selectedContainer().width }} x {{ selectedContainer().height }})</h4>
    </form></mat-grid-tile><mat-grid-tile><form><h4>Image</h4><mat-form-field><mat-label>Image formats</mat-label>
      <mat-select [ngModel]="selectedImage()" (ngModelChange)="selectedImage.set($event)" name="image" required>
        @for (image of images; track image.value) { <mat-option [value]="image.value">{{ image.viewValue }}</mat-option> }
      </mat-select></mat-form-field><h3>Current image: {{ selectedImage() }}</h3>
    </form></mat-grid-tile></mat-grid-list>
    <ngx-ratio-image [src]="selectedImage()" [width]="selectedContainer().width" [height]="selectedContainer().height" [debug]="true" />`,
  styles: `:host { display: block; padding: 1rem; } .controls { margin: 20px; }`,
})
export class InteractiveComponent {
  protected readonly images: ImageOption[] = [
    { value: 'assets/3to4.jpg', viewValue: 'File: 3 : 4' }, { value: 'assets/4to3.jpg', viewValue: 'File: 4 : 3' },
    { value: 'assets/1to1.jpg', viewValue: 'File: 1 : 1' }, { value: 'https://dummyimage.com/800x600', viewValue: 'Online: 4:3' },
    { value: 'https://dummyimage.com/800x450', viewValue: 'Online: 16:9' },
  ];
  protected readonly containers: ContainerOption[] = [{ width: 800, height: 600, viewValue: '800 x 600' }, { width: 600, height: 800, viewValue: '600 x 800' }];
  protected readonly selectedImage = signal(this.images[0].value);
  protected readonly selectedContainer = signal(this.containers[0]);
}
