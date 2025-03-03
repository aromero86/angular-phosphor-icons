import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[image-broken-bold]',
  standalone: true,
})
export class UiIconImageBrokenBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M137.73,208l7.94-23.8,39-15.58,15.58-39,23.8-7.94V200a8,8,0,0,1-8,8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M95.57,208l18-54.05,40.27-16.1L170,97.58l54.05-18V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0l32.84,32.84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}