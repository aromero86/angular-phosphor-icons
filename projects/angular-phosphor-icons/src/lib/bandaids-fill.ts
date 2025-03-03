import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[bandaids-fill]',
  standalone: true,
})
export class UiIconBandaidsFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="12"/><path d="M184.57,128l27.71-27.72a40,40,0,1,0-56.56-56.56L128,71.43,100.28,43.72a40,40,0,1,0-56.56,56.56L71.43,128,43.72,155.72a40,40,0,1,0,56.56,56.56L128,184.57l27.72,27.71a40,40,0,1,0,56.56-56.56ZM128,94.06,161.94,128,128,161.94,94.06,128Zm39-39A24,24,0,1,1,201,89l-27.72,27.72L139.31,82.75ZM89,201A24,24,0,1,1,55,167l27.72-27.72,33.94,33.94Z"/></svg>`;
    }
}