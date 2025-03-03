import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[hand-thin]',
  standalone: true,
})
export class UiIconHandThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M168,76a20,20,0,0,1,40,0v76a80,80,0,0,1-80,80c-44.18,0-60.75-21.28-93.32-90a20,20,0,0,1,34.64-20L88,152V60a20,20,0,0,1,40,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M128,120V44a20,20,0,0,1,40,0v76" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}