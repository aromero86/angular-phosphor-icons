import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[aperture-duotone]',
  standalone: true,
})
export class UiIconApertureDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M195.88,60.12a96,96,0,1,0,0,135.76A96,96,0,0,0,195.88,60.12Zm-31.2,74.58-24.14,28.41h0l-36.68-6.69h0L91.32,121.3h0l24.14-28.41h0l36.68,6.69h0l12.54,35.12Z" opacity="0.2"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="32" x2="164.68" y2="134.7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="44.86" y1="80" x2="152.14" y2="99.58" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="44.86" y1="176" x2="115.46" y2="92.89" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="224" x2="91.32" y2="121.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="211.14" y1="176" x2="103.86" y2="156.42" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="211.14" y1="80" x2="140.54" y2="163.11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}