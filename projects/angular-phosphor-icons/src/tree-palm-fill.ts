import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[tree-palm-fill]',
  standalone: true,
})
export class UiIconTreePalmFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M239.84,60.33a8,8,0,0,1-4.65,5.75L179,90.55a71.42,71.42,0,0,1,43.36,33.21,70.64,70.64,0,0,1,7.2,54.32A8,8,0,0,1,217,182.36l-81-61.68V224a8,8,0,0,1-16,0V120.68L39,182.36a8,8,0,0,1-12.57-4.28,70.64,70.64,0,0,1,7.2-54.32A71.42,71.42,0,0,1,77,90.55L20.81,66.08a8,8,0,0,1-2.6-12.85,66.86,66.86,0,0,1,97.74,0,72.21,72.21,0,0,1,12,17,72.21,72.21,0,0,1,12.05-17,66.86,66.86,0,0,1,97.74,0A8,8,0,0,1,239.84,60.33Z"/></svg>`;
    }
}