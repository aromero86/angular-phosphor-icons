import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[paragraph-fill]',
  standalone: true,
})
export class UiIconParagraphFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M216,48a8,8,0,0,1-8,8H192V208a8,8,0,0,1-16,0V56H152V208a8,8,0,0,1-16,0V168H96A64,64,0,0,1,96,40H208A8,8,0,0,1,216,48Z"/></svg>`;
    }
}