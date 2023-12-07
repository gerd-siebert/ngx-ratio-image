# Use the library

## Install the Package

npm i ngx-ratio-imgae

## add Module

Add the **RatioImageModule** to imports in the **app.module.ts** or an other module

```
imports: [
	BrowserModule,
	AppRoutingModule,
	RatioImageModule
],
```

## Add Component Tag in **app.component,ts++ or an other  

```
<h2>Online Resource</h2>
<ngx-ratio-image [src]="'https://dummyimage.com/800x600'" [width]="800" [height]="450"></ngx-ratio-image>
```
