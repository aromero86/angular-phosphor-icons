import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[scribble-loop-duotone]',
  standalone: true,
})
export class UiIconScribbleLoopDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M185.33,119.83C187,162.36,159.88,208,108.6,208c-64,0-64-96,32-96a134.44,134.44,0,0,1,44.73,7.83" opacity="0.2"/><path d="M32,92.8S64,48,112,48c104,0,92.6,160-3.4,160-64,0-64-96,32-96,64,0,107.4,48,107.4,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}