import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[high-definition-fill]',
  standalone: true,
})
export class UiIconHighDefinitionFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M196,128a32,32,0,0,1-32,32H152V96h12A32,32,0,0,1,196,128Zm36-72V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM120,88a8,8,0,0,0-16,0v32H64V88a8,8,0,0,0-16,0v80a8,8,0,0,0,16,0V136h40v32a8,8,0,0,0,16,0Zm92,40a48.05,48.05,0,0,0-48-48H144a8,8,0,0,0-8,8v80a8,8,0,0,0,8,8h20A48.05,48.05,0,0,0,212,128Z"/></svg>`;
    }
}