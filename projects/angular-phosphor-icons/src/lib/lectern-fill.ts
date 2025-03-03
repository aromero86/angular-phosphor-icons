import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[lectern-fill]',
  standalone: true,
})
export class UiIconLecternFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M246.3,120.84l-40-80A15.92,15.92,0,0,0,192,32H64A15.92,15.92,0,0,0,49.7,40.84l-40,80A16,16,0,0,0,24,144h96v64H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V144h96a16,16,0,0,0,14.31-23.16ZM192,120H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"/></svg>`;
    }
}