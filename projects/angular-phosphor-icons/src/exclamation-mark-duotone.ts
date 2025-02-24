import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[exclamation-mark-duotone]',
  standalone: true,
})
export class UiIconExclamationMarkDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="40" y="24" width="176" height="208" rx="16" opacity="0.2"/><circle cx="128" cy="200" r="16"/><line x1="128" y1="48" x2="128" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}