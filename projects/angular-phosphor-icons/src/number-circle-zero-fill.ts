import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[number-circle-zero-fill]',
  standalone: true,
})
export class UiIconNumberCircleZeroFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M156,128c0,14.86-5.9,40-28,40s-28-25.14-28-40,5.9-40,28-40S156,113.14,156,128Zm76,0A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-60,0c0-14.25-3.56-27.53-10-37.39C154,78.44,142.23,72,128,72s-26,6.44-34,18.61c-6.47,9.86-10,23.14-10,37.39s3.56,27.53,10,37.39c8,12.18,19.74,18.61,34,18.61s26-6.43,34-18.61C168.44,155.53,172,142.25,172,128Z"/></svg>`;
    }
}