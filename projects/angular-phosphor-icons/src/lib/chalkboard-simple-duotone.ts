import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[chalkboard-simple-duotone]',
  standalone: true,
})
export class UiIconChalkboardSimpleDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M216,48H40a8,8,0,0,0-8,8V200H160V168h64V56A8,8,0,0,0,216,48Z" opacity="0.2"/><path d="M32,200V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8v80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="16" y1="200" x2="240" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="160 200 160 168 224 168 224 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}