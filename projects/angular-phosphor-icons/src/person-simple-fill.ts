import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[person-simple-fill]',
  standalone: true,
})
export class UiIconPersonSimpleFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M95.89,48a32,32,0,1,1,32,32A32,32,0,0,1,95.89,48Zm132.23,73.14C226.4,120.11,185.55,96,128,96S29.6,120.11,27.88,121.14a8,8,0,0,0,8.24,13.72c.36-.22,34.91-20.6,83.88-22.68V149L58,218.69a8,8,0,1,0,12,10.62L128,164l58,65.27a8,8,0,0,0,12-10.62L136,149V112.19c48.77,2.08,83.53,22.46,83.88,22.67a8,8,0,1,0,8.24-13.72Z"/></svg>`;
    }
}