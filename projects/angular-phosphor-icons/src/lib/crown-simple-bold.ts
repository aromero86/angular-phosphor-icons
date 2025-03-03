import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[crown-simple-bold]',
  standalone: true,
})
export class UiIconCrownSimpleBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M54.71,200H201.29a8,8,0,0,0,7.88-6.61l22.7-104A8,8,0,0,0,218,82.76L176,128,135.26,36.65a8,8,0,0,0-14.52,0L80,128,38,82.76a8,8,0,0,0-13.9,6.66l22.7,104A8,8,0,0,0,54.71,200Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}