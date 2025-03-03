import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[beer-stein-light]',
  standalone: true,
})
export class UiIconBeerSteinLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M48,72H192a0,0,0,0,1,0,0V208a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V72A0,0,0,0,1,48,72Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M192,96h24a16,16,0,0,1,16,16v64a16,16,0,0,1-16,16H192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="96" y1="104" x2="96" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="144" y1="104" x2="144" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M48,72c0-26.51,25.07-48,56-48,16.59,0,31.49,6.18,41.74,16H160a32,32,0,0,1,32,32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}