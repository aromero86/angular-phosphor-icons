import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[baseball-cap-bold]',
  standalone: true,
})
export class UiIconBaseballCapBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M32,128a96,96,0,0,1,192,0v56a16,16,0,0,1-25.48,12.88C182.53,185.26,159,176,128,176s-54.53,9.26-70.52,20.88A16,16,0,0,1,32,184Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M32,152a160,160,0,0,1,192,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M88.4,124.94C92.57,67.43,128,32,128,32s35.43,35.43,39.6,92.94" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}