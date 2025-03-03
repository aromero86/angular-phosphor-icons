import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[columns-plus-left-duotone]',
  standalone: true,
})
export class UiIconColumnsPlusLeftDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="28" y="108" width="176" height="40" rx="8" transform="translate(244 12) rotate(90)" opacity="0.2"/><rect x="100" y="108" width="176" height="40" rx="8" transform="translate(316 -60) rotate(90)" opacity="0.2"/><rect x="28" y="108" width="176" height="40" rx="8" transform="translate(244 12) rotate(90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="100" y="108" width="176" height="40" rx="8" transform="translate(316 -60) rotate(90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="16" y1="128" x2="64" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="104" x2="40" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}