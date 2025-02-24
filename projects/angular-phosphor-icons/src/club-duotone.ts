import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[club-duotone]',
  standalone: true,
})
export class UiIconClubDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M167.83,98.79a48,48,0,1,1-23.9,71.65L160,224H96l16.07-53.56a48,48,0,1,1-23.9-71.65,48,48,0,1,1,79.66,0Z" opacity="0.2"/><path d="M167.83,98.79a48,48,0,1,1-23.9,71.65L160,224H96l16.07-53.56a48,48,0,1,1-23.9-71.65,48,48,0,1,1,79.66,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}