import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[flip-horizontal-thin]',
  standalone: true,
})
export class UiIconFlipHorizontalThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M96.63,36.89C100,28.86,112,31.29,112,40V200a8,8,0,0,1-8,8H40a8,8,0,0,1-7.37-11.12Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M159.37,36.89C156,28.86,144,31.29,144,40V200a8,8,0,0,0,8,8h64a8,8,0,0,0,7.37-11.12Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}