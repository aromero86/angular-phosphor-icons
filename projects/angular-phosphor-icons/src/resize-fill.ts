import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[resize-fill]',
  standalone: true,
})
export class UiIconResizeFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M144,120v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V120a8,8,0,0,1,8-8h88A8,8,0,0,1,144,120Zm64,56a8,8,0,0,0-8,8v16H176a8,8,0,0,0,0,16h24a16,16,0,0,0,16-16V184A8,8,0,0,0,208,176Zm0-72a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V112A8,8,0,0,0,208,104Zm-8-64H184a8,8,0,0,0,0,16h16V72a8,8,0,0,0,16,0V56A16,16,0,0,0,200,40Zm-56,0H112a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM48,88a8,8,0,0,0,8-8V56H72a8,8,0,0,0,0-16H56A16,16,0,0,0,40,56V80A8,8,0,0,0,48,88Z"/></svg>`;
    }
}