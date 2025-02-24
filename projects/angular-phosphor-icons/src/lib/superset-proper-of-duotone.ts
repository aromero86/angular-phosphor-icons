import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[superset-proper-of-duotone]',
  standalone: true,
})
export class UiIconSupersetProperOfDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M64,208h72a80,80,0,0,0,0-160H64Z" opacity="0.2"/><path d="M64,208h72a80,80,0,0,0,0-160H64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}