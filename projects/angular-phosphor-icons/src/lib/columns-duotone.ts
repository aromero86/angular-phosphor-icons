import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[columns-duotone]',
  standalone: true,
})
export class UiIconColumnsDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="-4" y="100" width="176" height="56" rx="8" transform="translate(212 44) rotate(90)" opacity="0.2"/><rect x="84" y="100" width="176" height="56" rx="8" transform="translate(300 -44) rotate(90)" opacity="0.2"/><rect x="-4" y="100" width="176" height="56" rx="8" transform="translate(212 44) rotate(90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="84" y="100" width="176" height="56" rx="8" transform="translate(300 -44) rotate(90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}