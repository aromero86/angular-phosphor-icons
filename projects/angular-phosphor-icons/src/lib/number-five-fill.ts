import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[number-five-fill]',
  standalone: true,
})
export class UiIconNumberFiveFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm-76,80a44,44,0,1,1-34.22,71.66,8,8,0,0,1,12.44-10.06,28,28,0,1,0,.35-35.62,8,8,0,0,1-14-6.29l7.55-52.82A8,8,0,0,1,104,64h56a8,8,0,0,1,0,16H110.94L107,107.4A44,44,0,0,1,124,104Z"/></svg>`;
    }
}