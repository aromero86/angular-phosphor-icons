import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[fast-forward-thin]',
  standalone: true,
})
export class UiIconFastForwardThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M40,71.85v112.3a7.91,7.91,0,0,0,12.18,6.59l88.19-56.15a7.8,7.8,0,0,0,0-13.18L52.18,65.26A7.91,7.91,0,0,0,40,71.85Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M144,71.85v112.3a7.91,7.91,0,0,0,12.18,6.59l88.19-56.15a7.8,7.8,0,0,0,0-13.18L156.18,65.26A7.91,7.91,0,0,0,144,71.85Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}