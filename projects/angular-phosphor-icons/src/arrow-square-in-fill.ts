import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[arrow-square-in-fill]',
  standalone: true,
})
export class UiIconArrowSquareInFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,136v64a8,8,0,0,1-13.66,5.66L88,179.31,45.66,221.66a8,8,0,0,1-11.32-11.32L76.69,168,50.34,141.66A8,8,0,0,1,56,128h64A8,8,0,0,1,128,136ZM208,32H80A16,16,0,0,0,64,48V96a8,8,0,0,0,16,0V48H208V176H160a8,8,0,0,0,0,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"/></svg>`;
    }
}