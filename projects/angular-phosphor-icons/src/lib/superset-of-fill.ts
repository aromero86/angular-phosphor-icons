import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[superset-of-fill]',
  standalone: true,
})
export class UiIconSupersetOfFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM176,184H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm-32-32H80a8,8,0,0,1,0-16h64a24,24,0,0,0,0-48H80a8,8,0,0,1,0-16h64a40,40,0,0,1,0,80Z"/></svg>`;
    }
}