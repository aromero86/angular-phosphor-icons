import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[square-logo-fill]',
  standalone: true,
})
export class UiIconSquareLogoFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208ZM168,96v64a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8h64A8,8,0,0,1,168,96Z"/></svg>`;
    }
}