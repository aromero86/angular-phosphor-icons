import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[cell-signal-x-duotone]',
  standalone: true,
})
export class UiIconCellSignalXDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M200,160l-45.66,45.66a8,8,0,0,1-5.65,2.34H32a8,8,0,0,1-5.66-13.66l160-160A8,8,0,0,1,200,40Z" opacity="0.2"/><line x1="208" y1="152" x2="160" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="208" y1="200" x2="160" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M120,208H32a8,8,0,0,1-5.66-13.66l160-160A8,8,0,0,1,200,40v72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}