import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[rows-plus-bottom-fill]',
  standalone: true,
})
export class UiIconRowsPlusBottomFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M224,128v24a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V128a16,16,0,0,1,16-16H208A16,16,0,0,1,224,128ZM208,40H48A16,16,0,0,0,32,56V80A16,16,0,0,0,48,96H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40ZM152,208H136V192a8,8,0,0,0-16,0v16H104a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V224h16a8,8,0,0,0,0-16Z"/></svg>`;
    }
}