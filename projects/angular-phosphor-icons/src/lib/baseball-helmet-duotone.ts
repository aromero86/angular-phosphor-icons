import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[baseball-helmet-duotone]',
  standalone: true,
})
export class UiIconBaseballHelmetDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="88" cy="156" r="20" opacity="0.2"/><path d="M128,216a64,64,0,0,0,64-64V128H152v24a64,64,0,0,1-64,64Z" opacity="0.2"/><circle cx="88" cy="156" r="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M216,128a96,96,0,0,0-192,0v24a64,64,0,0,0,128,0V128h96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M88,216h40a64,64,0,0,0,64-64V128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}