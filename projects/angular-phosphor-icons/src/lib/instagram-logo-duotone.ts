import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[instagram-logo-duotone]',
  standalone: true,
})
export class UiIconInstagramLogoDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2"/><rect x="32" y="32" width="192" height="192" rx="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"/><circle cx="180" cy="76" r="12"/></svg>`;
    }
}