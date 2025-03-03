import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[airplane-duotone]',
  standalone: true,
})
export class UiIconAirplaneDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M152,96l80,40v32l-80-16v32l16,16v32l-40-16L88,232V200l16-16V152L24,168V136l80-40V48a24,24,0,0,1,48,0Z" opacity="0.2"/><path d="M152,96l80,40v32l-80-16v32l16,16v32l-40-16L88,232V200l16-16V152L24,168V136l80-40V48a24,24,0,0,1,48,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}