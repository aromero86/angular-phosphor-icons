import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[flip-horizontal-bold]',
  standalone: true,
})
export class UiIconFlipHorizontalBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M92.63,36.89C96,28.86,108,31.29,108,40V200a8,8,0,0,1-8,8H40a8,8,0,0,1-7.37-11.12Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M163.37,36.89C160,28.86,148,31.29,148,40V200a8,8,0,0,0,8,8h60a8,8,0,0,0,7.37-11.12Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}