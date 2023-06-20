import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface Image {
	clientWidth: number;
	clientHeight: number;
	naturalWidth: number;
	naturalHeight: number;
}

@Component({
	selector: 'ngx-ratio-image',
	templateUrl: 'ratio-image.component.html',
	styles: []
})
export class RatioImageComponent implements AfterViewInit, OnChanges {
	@Input({ required: true }) public src = '';
	@Input({ required: true }) public width = 0;
	@Input({ required: true }) public height = 0;
	@Input() public debug = false;

	public imageWidth = 0;
	public imageHeight = 0;

	public naturalWidth = 0;
	public naturalHeight = 0;

	public imageLeft = 0;
	public imageTop = 0;
	public ratioImage = 1;
	public ratioBox = 1;

	public scale = 1;

	constructor() {
		if (this.debug) console.log('constructor', this.src);
	}

	ngAfterViewInit() {
		if (this.debug) console.log('ngAfterViewInit', this.src, this.width, this.height);
	}

	onImageLoad(img: Image) {
		if (this.debug) console.log('onImageLoad ', img);
		if (img) {
			this.naturalWidth = img.naturalWidth;
			this.naturalHeight = img.naturalHeight;
			if (this.width > 0 && this.height > 0) {
				this.calculate();
			}
		}
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.calculate();
	}

	private calculate() {
		this.ratioImage = this.naturalWidth / this.naturalHeight;
		this.ratioBox = this.width / this.height;

		if (this.ratioBox > this.ratioImage) {
			this.scale = this.height / this.naturalHeight;
			this.imageLeft = (this.width - this.naturalWidth * this.scale) / 2;
		} else if (this.ratioBox < this.ratioImage) {
			this.scale = this.width / this.naturalWidth;
			this.imageTop = (this.height - this.naturalHeight * this.scale) / 2;
		} else {
			this.scale = this.width / this.naturalWidth;
			this.imageLeft = 0;
			this.imageTop = 0;
		}

		if (this.debug) console.log('calculate', this.src, this.naturalWidth + ' x ' + this.naturalHeight);
	}
}
