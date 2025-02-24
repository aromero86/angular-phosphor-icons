import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[lamp-pendant-duotone]',
  standalone: true,
})
export class UiIconLampPendantDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M88,72a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v8a104,104,0,0,1,64,96H24A104,104,0,0,1,88,80Z" opacity="0.2"/><line x1="128" y1="16" x2="128" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M96,176v8a32,32,0,0,0,64,0v-8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M88,72a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v8a104,104,0,0,1,64,96H24A104,104,0,0,1,88,80Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}