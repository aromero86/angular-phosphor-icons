import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[grains-fill]',
  standalone: true,
})
export class UiIconGrainsFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,56a87.52,87.52,0,0,0-31.84,6c-14.32-29.7-43.25-44.46-44.57-45.13a8,8,0,0,0-7.16,0C123.1,17.51,94.17,32.27,79.85,62A87.52,87.52,0,0,0,48,56a8,8,0,0,0-8,8v80a88.12,88.12,0,0,0,75.48,87.1,4,4,0,0,0,4.52-4V176.27a8.17,8.17,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v51.14a4,4,0,0,0,4.52,4A88.12,88.12,0,0,0,216,144V64A8,8,0,0,0,208,56Zm-88,93.46a88,88,0,0,0-64-37.09V72.44A72.1,72.1,0,0,1,120,144Zm8-42.1A88.61,88.61,0,0,0,94.16,69.11c9.21-19.21,26.4-31.33,33.84-35.9,7.45,4.58,24.63,16.7,33.84,35.9A88.61,88.61,0,0,0,128,107.36Zm72,5a88,88,0,0,0-64,37.09V144a72.1,72.1,0,0,1,64-71.56Z"/></svg>`;
    }
}