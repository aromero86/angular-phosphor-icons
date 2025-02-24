import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[tote-simple-bold]',
  standalone: true,
})
export class UiIconToteSimpleBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M209.67,208H46.33a8.06,8.06,0,0,1-8-7.07l-14.25-120a8,8,0,0,1,8-8.93H223.92a8,8,0,0,1,8,8.93l-14.25,120A8.06,8.06,0,0,1,209.67,208Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M88,72V64a40,40,0,0,1,80,0v8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}