import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[fan-duotone]',
  standalone: true,
})
export class UiIconFanDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M136.5,150.44A23.75,23.75,0,0,1,128,152a24,24,0,0,1-23.07-17.4h0L33,155.13a52,52,0,1,0,103.49-4.68Z" opacity="0.2"/><path d="M104.31,124.14a24,24,0,0,1,29.52-19.42h0L152,32.17a52,52,0,1,0-47.69,92Z" opacity="0.2"/><path d="M201,105.5a52,52,0,0,0-57.84,3.91h0a24,24,0,0,1,2.06,35.26h0l53.74,52a52,52,0,0,0,2-91.2Z" opacity="0.2"/><circle cx="128" cy="128" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M104.31,124.14a52,52,0,1,1,47.69-92l-18.17,72.54" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M136.5,150.45A52,52,0,1,1,33,155.13l71.91-20.54" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M143.19,109.41A52,52,0,1,1,199,196.7l-53.74-52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}