import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[tire-duotone]',
  standalone: true,
})
export class UiIconTireDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M92,224c-28.72,0-52-43-52-96S63.28,32,92,32h72c-28.72,0-52,43-52,96s23.28,96,52,96Z" opacity="0.2"/><ellipse cx="168" cy="128" rx="16" ry="40" opacity="0.2"/><ellipse cx="168" cy="128" rx="16" ry="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><ellipse cx="164" cy="128" rx="52" ry="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M232,224H92c-28.72,0-52-43-52-96S63.28,32,92,32h72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="40.38 116.3 80 88 112.77 111.41" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="46.85 175.68 80 152 120.65 181.03" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}