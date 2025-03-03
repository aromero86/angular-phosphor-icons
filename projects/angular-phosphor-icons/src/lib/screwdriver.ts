import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[screwdriver]',
  standalone: true,
})
export class UiIconScrewdriver {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="200" y1="56" x2="144" y2="112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M74.34,132.94a8,8,0,0,1,0-11.32l8-8A8,8,0,0,1,87.17,112H104a8,8,0,0,0,8-8V87.31a8,8,0,0,1,2.34-5.65l53.23-53.23a42.42,42.42,0,0,1,60,0h0a42.42,42.42,0,0,1,0,60l-53.23,53.23a8,8,0,0,1-5.65,2.34H152a8,8,0,0,0-8,8v16.83a8,8,0,0,1-1.62,4.83l-8,8a8,8,0,0,1-11.32,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="98.7" y1="157.3" x2="16" y2="240" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}