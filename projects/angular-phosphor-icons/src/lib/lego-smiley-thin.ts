import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[lego-smiley-thin]',
  standalone: true,
})
export class UiIconLegoSmileyThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="100" cy="112" r="8"/><circle cx="156" cy="112" r="8"/><path d="M156,152a53,53,0,0,1-56,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><rect x="48" y="56" width="160" height="144" rx="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M96,56V32a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8V56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M72,200v24a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}