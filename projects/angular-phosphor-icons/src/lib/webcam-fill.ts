import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[webcam-fill]',
  standalone: true,
})
export class UiIconWebcamFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M160,104a32,32,0,1,1-32-32A32,32,0,0,1,160,104Zm72,104a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16h88V183.6a80,80,0,1,1,16,0V200h88A8,8,0,0,1,232,208ZM128,152a48,48,0,1,0-48-48A48.05,48.05,0,0,0,128,152Z"/></svg>`;
    }
}