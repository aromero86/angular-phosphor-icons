import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[tooth]',
  standalone: true,
})
export class UiIconTooth {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="88" y1="64" x2="168" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="168" y1="64" x2="88" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M40,79.76C39.93,151.18,63.48,208,84,222.54a8,8,0,0,0,12.52-6C98,196.31,104,160,128,160s30,36.31,31.51,56.53a8,8,0,0,0,12.52,6c20.49-14.55,44-71.36,44-142.78A47.94,47.94,0,0,0,168,32H88A47.94,47.94,0,0,0,40,79.76Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}