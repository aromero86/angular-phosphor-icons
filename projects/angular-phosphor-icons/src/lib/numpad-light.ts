import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[numpad-light]',
  standalone: true,
})
export class UiIconNumpadLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="64" cy="48" r="14"/><circle cx="128" cy="48" r="14"/><circle cx="192" cy="48" r="14"/><circle cx="64" cy="104" r="14"/><circle cx="128" cy="104" r="14"/><circle cx="192" cy="104" r="14"/><circle cx="64" cy="160" r="14"/><circle cx="128" cy="160" r="14"/><circle cx="128" cy="216" r="14"/><circle cx="192" cy="160" r="14"/></svg>`;
    }
}