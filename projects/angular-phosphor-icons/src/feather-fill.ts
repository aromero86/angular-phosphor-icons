import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[feather-fill]',
  standalone: true,
})
export class UiIconFeatherFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M211.84,134.81l-59.79,60.47,0,0a15.75,15.75,0,0,1-11.2,4.68H75.32L45.66,229.66a8,8,0,0,1-11.32-11.32l22.59-22.58h0L124.7,128H209A4,4,0,0,1,211.84,134.81ZM216.7,30.57a64,64,0,0,0-85.9,4.14l-9.6,9.48A4,4,0,0,0,120,47v63l55-55a8,8,0,0,1,11.31,11.31L140.71,112h88.38a4,4,0,0,0,3.56-2.16A64.08,64.08,0,0,0,216.7,30.57ZM62.83,167.23,104,126.06V70.76a4,4,0,0,0-6.81-2.84L60.69,104A15.9,15.9,0,0,0,56,115.31V164.4A4,4,0,0,0,62.83,167.23Z"/></svg>`;
    }
}