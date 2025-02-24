import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[dot-outline-fill]',
  standalone: true,
})
export class UiIconDotOutlineFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z"/></svg>`;
    }
}