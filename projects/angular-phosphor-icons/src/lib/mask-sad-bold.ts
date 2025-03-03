import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[mask-sad-bold]',
  standalone: true,
})
export class UiIconMaskSadBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M216,48a8,8,0,0,0-10.89-7.47C190,46.41,160.89,55.71,128,55.71s-62-9.3-77.11-15.16A8,8,0,0,0,40,48v55.77C40,174.6,79.4,232,128,232s88-57.4,88-128.21Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M148,181.5a39.11,39.11,0,0,0-40,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M148,120a29.59,29.59,0,0,0,28,2.12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M80,122.12A29.61,29.61,0,0,0,108,120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}