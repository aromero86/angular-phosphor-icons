import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[infinity-light]',
  standalone: true,
})
export class UiIconInfinityLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M106.63,152.13l-8.69,9.81a48,48,0,1,1,0-67.88l60.12,67.88a48,48,0,1,0,0-67.88l-8.69,9.81" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}