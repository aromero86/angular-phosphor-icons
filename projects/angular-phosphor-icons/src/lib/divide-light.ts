import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[divide-light]',
  standalone: true,
})
export class UiIconDivideLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="128" cy="64" r="14"/><circle cx="128" cy="192" r="14"/></svg>`;
    }
}