import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[high-heel-light]',
  standalone: true,
})
export class UiIconHighHeelLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M32,120c50.38,0,93.51,31.28,111.3,75.08a8,8,0,0,0,7.42,4.92H240a8,8,0,0,0,8-8v-4.73A23.92,23.92,0,0,0,229.21,164L176,152,64,40C44.59,61.22,32,89,32,120Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M80,130v62a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}