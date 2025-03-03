import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[signature-duotone]',
  standalone: true,
})
export class UiIconSignatureDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M77.91,32h0Z" opacity="0.2"/><path d="M78,32c-32.54.07-42.24,97.52-10.54,110.56C92,90.26,111.82,32.05,78,32Z" opacity="0.2"/><line x1="24" y1="176" x2="232" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M24,224S139.52,32,77.91,32C32.07,32,31.58,225.11,128,104.19c0,0,8.11,39.44,27.23,39.81,7.72.15,17.25-6.31,28.77-24,0,0,0,24,48,24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}