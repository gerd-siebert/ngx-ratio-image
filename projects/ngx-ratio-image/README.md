# ngx-ratio-image

# ngx-ratio-image - an Angular lib to show an image with variable ratio in container with a fixed ratio.
# RatioImage

-   [Features](#features)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Examples](#examples)
-   [Available Parameters](#available-parameters)
-   [Demo](#demo)
-   [Contribute](#contribute)
-   [License](#license)
    This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.2.22

## Features
## Development server

-   can display any images in a predefined container
-   black bars are avoided with a blurring effect
-   non stable-phase with versions smaller 1.0.0, please test and feedback
-   build with Angular 20.2, runs up to Angular 21 
    Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Installation
## Code scaffolding

**Angular 20.2 with ngx-ratio-image**
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

```
npm ngx-ratio-image --save
# Or with yarn
yarn add ngx-ratio-image
```
## Build

# Usage
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Import the module and add it to your imports section in your main AppModule:
## Running unit tests

```
// File: app.module.ts
// all your other imports...
import { RatioImageModule } from 'ngx-ratio-image';
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

@NgModule({
declarations: [
  AppComponent
],
imports: [
  RatioImageComponent
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
```
## Running end-to-end tests

```
// File: app.component.html
// all your HTML...
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

<ngx-ratio-image
	[src]="'https://dummyimage.com/800x600'"
	[width]="1600"
	[height]="900"
></ngx-ratio-image>
```
## Further help

## Examples

The source code contains several examples in the folder [`projects/ratio-image-app`](projects/ratio-image-app/src/app) in this repository to show how the output works with different images.

## Available Parameters

| Attribute | Type    | Default | Required | Description                           |
| --------- | ------- | ------- | -------- | ------------------------------------- |
| src       | string  | ''      | yes      | Allow qrdata to be an empty string    |
| width     | number  | 0       | yes      | width of the container in pixels      |
| height    | number  | 0       | yes      | height of the container in pixels     |
| debug     | boolean | false   | no       | Activate a red border on console text |

# Demo

The source for the angular app is available in [`projects/ratio-image-app`](projects/ratio-image-app). Run the command

```
ng serve ratio-image-app --open
```

and open the url `http://localhost:4201/` in your browser

## AOT - Ahead Of Time Compilation

AOT Support is not tested, please feed back the result or make a feature request

## SSR - Server Side Rendering

SSR Support is not tested, please feed back the result or make a feature request

## Contribute

-   Please open your PR against the main branch.
-   Make sure your editor uses **prettier** to minimize committed code changes.

## License

MIT License

Copyright (c) 2026 - present [Gerd Siebert(gerd.siebert@gmail.com)](mailto:gerd.siebert@gmail.com)
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

