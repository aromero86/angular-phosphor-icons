import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[volleyball-duotone]',
  standalone: true,
})
export class UiIconVolleyballDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M160,184a95.56,95.56,0,0,1-54.53-17L128,128h45.06a96,96,0,0,0-56.48-95.34h0A95.55,95.55,0,0,0,80,44.86L105.47,89a96,96,0,0,0-54.33,96.58h0A95.75,95.75,0,0,0,80,211.14h0A96,96,0,0,0,216.25,165.8,95.56,95.56,0,0,1,160,184Z" opacity="0.2"/><path d="M216.26,165.77v0l0,0Z" opacity="0.2"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="80" y1="44.86" x2="128" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="80" y1="211.14" x2="128" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="224" y1="128" x2="128" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M116.58,32.66A96,96,0,0,1,173.06,128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M51.14,185.56A96,96,0,0,1,105.47,89" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M216.28,165.78A96,96,0,0,1,105.47,167" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}