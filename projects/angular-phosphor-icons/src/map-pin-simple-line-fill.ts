import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[map-pin-simple-line-fill]',
  standalone: true,
})
export class UiIconMapPinSimpleLineFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16h80V135.42a56,56,0,1,1,16,0V208h80A8,8,0,0,1,224,216Z"/></svg>`;
    }
}