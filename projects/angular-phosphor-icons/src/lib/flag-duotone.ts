import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[flag-duotone]',
  standalone: true,
})
export class UiIconFlagDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56Z" opacity="0.2"/><line x1="48" y1="224" x2="48" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}