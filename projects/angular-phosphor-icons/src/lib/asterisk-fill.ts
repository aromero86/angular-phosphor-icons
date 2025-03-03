import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[asterisk-fill]',
  standalone: true,
})
export class UiIconAsteriskFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm59.43,129.07a8,8,0,0,1-4,14.93,7.92,7.92,0,0,1-4-1.07L136,141.86V192a8,8,0,0,1-16,0V141.86L76.57,166.93A8,8,0,0,1,65.65,164a8,8,0,0,1,2.92-10.93L112,128,68.57,102.93a8,8,0,0,1,8-13.86L120,114.14V64a8,8,0,0,1,16,0v50.14l43.43-25.07a8,8,0,0,1,8,13.86L144,128Z"/></svg>`;
    }
}