import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[pipe-wrench-bold]',
  standalone: true,
})
export class UiIconPipeWrenchBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M74.14,230.14a20,20,0,0,1-28.28-28.28L113.72,134,73.86,94.14a20,20,0,0,1,28.28-28.28l63.36,60.5a8,8,0,0,1,.16,11.45Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M81.88,102.16l-23.54,23.5a8,8,0,0,0,0,11.31l26.2,26.2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M143.6,105.44l23.3-23.1a8,8,0,0,1,11.25-.06L195.6,97.66a8,8,0,0,0,11.31,0l3.72-3.72a32,32,0,0,0,0-45.25l-33-30.35a8,8,0,0,0-11.32,0L110.63,73.78" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}