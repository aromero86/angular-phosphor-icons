import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[figma-logo-duotone]',
  standalone: true,
})
export class UiIconFigmaLogoDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="168" cy="128" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M136,96h32a32,32,0,0,0,0-64H136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M136,32H96a32,32,0,0,0,0,64h40Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M136,96H96a32,32,0,0,0,0,64h40Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M136,160H100a36,36,0,1,0,36,36Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="168" cy="128" r="32" opacity="0.2"/><path d="M136,32H96a32,32,0,0,0,0,64h40Z" opacity="0.2"/><path d="M136,160H100a36,36,0,1,0,36,36Z" opacity="0.2"/></svg>`;
    }
}