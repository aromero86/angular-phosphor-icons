import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[pentagram-duotone]',
  standalone: true,
})
export class UiIconPentagramDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M224,88H157.13L135.61,21.68a7.94,7.94,0,0,0-15.22,0L98.87,88H32a8,8,0,0,0-4.71,14.47l54.21,39-20.77,64a8,8,0,0,0,12.31,8.95L128,174.91l54.94,39.53a8,8,0,0,0,12.31-8.95l-20.77-64,54.21-39A8,8,0,0,0,224,88Z" opacity="0.2"/><path d="M60.75,205.49a8,8,0,0,0,12.31,8.95l155.63-112A8,8,0,0,0,224,88H32a8,8,0,0,0-4.71,14.47l155.63,112a8,8,0,0,0,12.31-8.95L135.61,21.68a7.94,7.94,0,0,0-15.22,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}