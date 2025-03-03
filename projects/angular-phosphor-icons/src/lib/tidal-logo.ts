import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[tidal-logo]',
  standalone: true,
})
export class UiIconTidalLogo {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="19.72" y="67.72" width="56.57" height="56.57" transform="translate(-53.82 62.06) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="99.72" y="67.72" width="56.57" height="56.57" transform="translate(-30.39 118.63) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="99.72" y="147.72" width="56.57" height="56.57" transform="translate(-86.96 142.06) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="179.72" y="67.72" width="56.57" height="56.57" transform="translate(-6.96 175.2) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}