import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[hard-drives-duotone]',
  standalone: true,
})
export class UiIconHardDrivesDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="40" y="144" width="176" height="64" rx="8" opacity="0.2"/><rect x="40" y="48" width="176" height="64" rx="8" opacity="0.2"/><rect x="40" y="144" width="176" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="40" y="48" width="176" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="180" cy="80" r="12"/><circle cx="180" cy="176" r="12"/></svg>`;
    }
}