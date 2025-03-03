import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[axe-thin]',
  standalone: true,
})
export class UiIconAxeThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M164.47,189.65a8,8,0,0,1-13.6-4.68c-7.09-53.14-42.41-87.8-59.45-99.76A8,8,0,0,1,90.33,73L129,34.33a8,8,0,0,1,12.2,1.09c12,17,46.62,52.36,99.76,59.45a8,8,0,0,1,4.68,13.6Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M151.78,48.22,171,29a17,17,0,0,1,24,0h0a17,17,0,0,1,0,24L177.7,70.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M126.3,121.7,37,211a17,17,0,0,1-24,0h0a17,17,0,0,1,0-24l91.25-91.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}