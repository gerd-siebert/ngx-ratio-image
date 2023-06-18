# ngx-ratio-image

# ngx-ratio-image - an Angular lib to show an image with variable ratio in container with a fixed ratio.

-   [Features](#features)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Examples](#examples)
-   [Available Parameters](#available-parameters)
-   [Demo](#demo)
-   [Contribute](#contribute)
-   [License](#license)

## Features

-   can display any images in a predefined container
-   black bars are avoided with a blurring effect
-   non stable-phase with versions smaller 1.0.0, please test and feedback
-   tested with Angular 16.1, not working with Angular 15

## Installation

**Angular 16.1 with ngx-ratio-image**

```
npm ngx-ratio-image --save
# Or with yarn
yarn add ngx-ratio-image
```

# Usage

### Import the module and add it to your imports section in your main AppModule:

```
// File: app.module.ts
// all your other imports...
import { RatioImageModule } from 'ngx-ratio-image';

@NgModule({
declarations: [
  AppComponent
],
imports: [
  RatioImageModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
```

```
// File: app.component.html
// all your HTML...

<ngx-ratio-image
	[src]="'https://dummyimage.com/800x600'"
	[width]="1600"
	[height]="900"
></ngx-ratio-image>
```

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

Copyright (c) 2023 - present [Gerd Siebert(gerd.siebert@gmail.com)](mailto:gerd.siebert@gmail.com)
