import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[framer-logo-duotone]',
  standalone: true,
})
export class UiIconFramerLogoDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104" opacity="0.2"/><polygon points="56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}