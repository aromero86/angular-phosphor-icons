import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[car-simple-duotone]',
  standalone: true,
})
export class UiIconCarSimpleDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M32,112,61.89,44.75A8,8,0,0,1,69.2,40H186.8a8,8,0,0,1,7.31,4.75L224,112Z" opacity="0.2"/><line x1="16" y1="112" x2="240" y2="112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M216,208H192a8,8,0,0,1-8-8V176H72v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V112L61.89,44.75A8,8,0,0,1,69.2,40H186.8a8,8,0,0,1,7.31,4.75L224,112v88A8,8,0,0,1,216,208Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}