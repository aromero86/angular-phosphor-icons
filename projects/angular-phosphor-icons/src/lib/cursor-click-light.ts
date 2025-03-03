import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[cursor-click-light]',
  standalone: true,
})
export class UiIconCursorClickLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="96" y1="16" x2="96" y2="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="16" y1="96" x2="24" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="128" y1="32" x2="136" y2="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="32" y1="128" x2="16" y2="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M162.35,138.35a8,8,0,0,1,2.46-13l46.41-17.82a8,8,0,0,0-.71-14.85L50.44,40.41a8,8,0,0,0-10,10L92.68,210.51a8,8,0,0,0,14.85.71l17.82-46.41a8,8,0,0,1,13-2.46l51.31,51.31a8,8,0,0,0,11.31,0L213.66,201a8,8,0,0,0,0-11.31Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}