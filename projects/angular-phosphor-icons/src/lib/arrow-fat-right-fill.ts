import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[arrow-fat-right-fill]',
  standalone: true,
})
export class UiIconArrowFatRightFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M132.94,231.39A8,8,0,0,1,128,224V184H48a16,16,0,0,1-16-16V88A16,16,0,0,1,48,72h80V32a8,8,0,0,1,13.66-5.66l96,96a8,8,0,0,1,0,11.32l-96,96A8,8,0,0,1,132.94,231.39Z"/></svg>`;
    }
}