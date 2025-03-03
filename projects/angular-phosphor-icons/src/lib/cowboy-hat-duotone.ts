import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[cowboy-hat-duotone]',
  standalone: true,
})
export class UiIconCowboyHatDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M65.47,160.18C97.87,192,128,192,128,192s30.13,0,62.53-31.82L185.94,136H70.06Z" opacity="0.2"/><path d="M40,128c40,64,88,64,88,64s48,0,88-64a32,32,0,0,1,0,64H40a32,32,0,0,1,0-64Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M65.47,160.18,85.54,54.53A8,8,0,0,1,98.4,49.76L123,70.25a8,8,0,0,0,10,0l24.6-20.49a8,8,0,0,1,12.86,4.77l20.07,105.65" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="70.06" y1="136" x2="185.94" y2="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}