import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[octagon-duotone]',
  standalone: true,
})
export class UiIconOctagonDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M164.45,32H91.55a8,8,0,0,0-5.66,2.34L34.34,85.89A8,8,0,0,0,32,91.55v72.9a8,8,0,0,0,2.34,5.66l51.55,51.55A8,8,0,0,0,91.55,224h72.9a8,8,0,0,0,5.66-2.34l51.55-51.55a8,8,0,0,0,2.34-5.66V91.55a8,8,0,0,0-2.34-5.66L170.11,34.34A8,8,0,0,0,164.45,32Z" opacity="0.2"/><path d="M164.45,32H91.55a8,8,0,0,0-5.66,2.34L34.34,85.89A8,8,0,0,0,32,91.55v72.9a8,8,0,0,0,2.34,5.66l51.55,51.55A8,8,0,0,0,91.55,224h72.9a8,8,0,0,0,5.66-2.34l51.55-51.55a8,8,0,0,0,2.34-5.66V91.55a8,8,0,0,0-2.34-5.66L170.11,34.34A8,8,0,0,0,164.45,32Z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"/></svg>`;
    }
}