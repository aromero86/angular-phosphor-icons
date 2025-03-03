import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[share-fat-bold]',
  standalone: true,
})
export class UiIconShareFatBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M30.93,198.72C47.39,181.19,90.6,144,152,144v48l80-80L152,32V80C99.2,80,31.51,130.45,24,195.54A4,4,0,0,0,30.93,198.72Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}