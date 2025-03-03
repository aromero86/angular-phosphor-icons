import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[envelope-simple-open-duotone]',
  standalone: true,
})
export class UiIconEnvelopeSimpleOpenDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="224 96 145.46 152 110.55 152 32 96 128 32 224 96" opacity="0.2"/><path d="M32,96V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96L128,32Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="224 96 145.46 152 110.55 152 32 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}