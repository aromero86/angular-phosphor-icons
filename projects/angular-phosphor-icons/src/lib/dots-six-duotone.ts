import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[dots-six-duotone]',
  standalone: true,
})
export class UiIconDotsSixDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="16" y="48" width="224" height="160" rx="16" opacity="0.2"/><circle cx="60" cy="92" r="12"/><circle cx="128" cy="92" r="12"/><circle cx="196" cy="92" r="12"/><circle cx="60" cy="164" r="12"/><circle cx="128" cy="164" r="12"/><circle cx="196" cy="164" r="12"/></svg>`;
    }
}