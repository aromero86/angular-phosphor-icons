import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[diamonds-four-bold]',
  standalone: true,
})
export class UiIconDiamondsFourBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="101.13" y="35.13" width="53.74" height="53.74" transform="translate(-6.35 108.67) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><rect x="101.13" y="167.13" width="53.74" height="53.74" transform="translate(-99.69 147.33) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><rect x="35.13" y="101.13" width="53.74" height="53.74" transform="translate(-72.35 81.33) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><rect x="167.13" y="101.13" width="53.74" height="53.74" transform="translate(-33.69 174.67) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}