import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[dropbox-logo-duotone]',
  standalone: true,
})
export class UiIconDropboxLogoDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="76 48 24 84 76 120 128 84 76 48" opacity="0.2"/><polygon points="180 48 128 84 180 120 232 84 180 48" opacity="0.2"/><polygon points="76 120 24 156 76 192 128 156 76 120" opacity="0.2"/><polygon points="180 120 128 156 180 192 232 156 180 120" opacity="0.2"/><polygon points="76 48 24 84 76 120 128 84 76 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="180 48 128 84 180 120 232 84 180 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="76 120 24 156 76 192 128 156 76 120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="180 120 128 156 180 192 232 156 180 120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="104.11 211.46 128 228 151.89 211.46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}