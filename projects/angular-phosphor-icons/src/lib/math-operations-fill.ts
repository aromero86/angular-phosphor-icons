import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[math-operations-fill]',
  standalone: true,
})
export class UiIconMathOperationsFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM146.34,77.66a8,8,0,0,1,11.32-11.32L168,76.69l10.34-10.35a8,8,0,0,1,11.32,11.32L179.31,88l10.35,10.34a8,8,0,0,1-11.32,11.32L168,99.31l-10.34,10.35a8,8,0,0,1-11.32-11.32L156.69,88ZM112,176H96v16a8,8,0,0,1-16,0V176H64a8,8,0,0,1,0-16H80V144a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16Zm0-80H64a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm80,96H144a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm0-32H144a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Z"/></svg>`;
    }
}