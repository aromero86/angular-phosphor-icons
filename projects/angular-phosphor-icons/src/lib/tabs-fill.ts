import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[tabs-fill]',
  standalone: true,
})
export class UiIconTabsFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M256,168a8,8,0,0,1-8,8H8A8,8,0,0,1,.37,165.6L22.63,91.4A15.89,15.89,0,0,1,38,80h84.1a15.89,15.89,0,0,1,15.32,11.4L158,160h15.3L150.79,85.15A4,4,0,0,1,154.62,80h15.43a16,16,0,0,1,15.32,11.4L206,160h15.3L198.79,85.15A4,4,0,0,1,202.62,80h15.43a16,16,0,0,1,15.32,11.4l22.26,74.18A8.11,8.11,0,0,1,256,168Z"/></svg>`;
    }
}