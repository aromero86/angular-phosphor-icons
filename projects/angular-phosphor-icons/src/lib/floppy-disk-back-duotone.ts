import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[floppy-disk-back-duotone]',
  standalone: true,
})
export class UiIconFloppyDiskBackDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,40H176V80a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V40.73a8,8,0,0,0-2.34,1.61L42.34,77.66A8,8,0,0,0,40,83.31V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48A8,8,0,0,0,208,40ZM128,184a32,32,0,1,1,32-32A32,32,0,0,1,128,184Z" opacity="0.2"/><path d="M40,83.31V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H83.31a8,8,0,0,0-5.65,2.34L42.34,77.66A8,8,0,0,0,40,83.31Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="152" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M80,40.72V80a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}