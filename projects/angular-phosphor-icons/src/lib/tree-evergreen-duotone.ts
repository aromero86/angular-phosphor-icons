import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[tree-evergreen-duotone]',
  standalone: true,
})
export class UiIconTreeEvergreenDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16" opacity="0.2"/><polygon points="128 16 48 120 88 120 32 192 224 192 168 120 208 120 128 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="192" x2="128" y2="240" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}