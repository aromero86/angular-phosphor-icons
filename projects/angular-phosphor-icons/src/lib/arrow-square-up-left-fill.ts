import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[arrow-square-up-left-fill]',
  standalone: true,
})
export class UiIconArrowSquareUpLeftFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM165.66,165.66a8,8,0,0,1-11.32,0L104,115.31V144a8,8,0,0,1-16,0V96a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H115.31l50.35,50.34A8,8,0,0,1,165.66,165.66Z"/></svg>`;
    }
}