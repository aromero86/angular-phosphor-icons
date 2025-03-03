import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[star-of-david-duotone]',
  standalone: true,
})
export class UiIconStarOfDavidDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="192 128 224 72 160.01 72.01 128 16 95.98 72.03 32 72.04 63.98 128 32 183.96 95.98 183.97 128 240 160.01 183.99 224 184 192 128" opacity="0.2"/><polygon points="128 240 224 72 32 72.04 128 240" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="128 16 224 184 32 183.96 128 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}