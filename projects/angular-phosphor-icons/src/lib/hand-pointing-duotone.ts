import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[hand-pointing-duotone]',
  standalone: true,
})
export class UiIconHandPointingDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M196,96a20,20,0,0,0-20,20V100a20,20,0,0,0-40,0V44a20,20,0,0,0-40,0V152L77.32,122a20,20,0,0,0-34.64,20c37.51,66,49.14,90,93.32,90a80,80,0,0,0,80-80V116A20,20,0,0,0,196,96Z" opacity="0.2"/><path d="M42.68,142a20,20,0,0,1,34.64-20L96,152V44a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0v36a80,80,0,0,1-80,80C91.82,232,80.19,208,42.68,142Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}