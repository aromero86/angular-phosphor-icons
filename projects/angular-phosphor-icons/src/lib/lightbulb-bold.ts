import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[lightbulb-bold]',
  standalone: true,
})
export class UiIconLightbulbBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="88" y1="232" x2="168" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M78.7,167A79.87,79.87,0,0,1,48,104.45C47.76,61.09,82.72,25,126.07,24a80,80,0,0,1,51.34,142.9A24.3,24.3,0,0,0,168,186v2a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-2A24.11,24.11,0,0,0,78.7,167Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M140,70a36.39,36.39,0,0,1,24,30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}