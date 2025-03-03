import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[tidal-logo-bold]',
  standalone: true,
})
export class UiIconTidalLogoBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="23.13" y="69.13" width="53.74" height="53.74" transform="translate(-53.24 63.47) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><rect x="99.72" y="67.72" width="56.57" height="56.57" transform="translate(-30.39 118.63) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><rect x="99.72" y="147.72" width="56.57" height="56.57" transform="translate(-86.96 142.06) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><rect x="179.13" y="69.13" width="53.74" height="53.74" transform="translate(-7.55 173.78) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}