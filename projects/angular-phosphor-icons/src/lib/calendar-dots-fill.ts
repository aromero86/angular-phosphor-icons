import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[calendar-dots-fill]',
  standalone: true,
})
export class UiIconCalendarDotsFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM84,184a12,12,0,1,1,12-12A12,12,0,0,1,84,184Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,128,184Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,128,144Zm44,40a12,12,0,1,1,12-12A12,12,0,0,1,172,184Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,172,144Zm36-64H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"/></svg>`;
    }
}