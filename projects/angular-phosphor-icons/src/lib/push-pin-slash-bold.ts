import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[push-pin-slash-bold]',
  standalone: true,
})
export class UiIconPushPinSlashBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="96.29" y1="159.71" x2="48" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M84.32,80C73.54,79.16,58.53,81.32,43,93.85a8,8,0,0,0-.65,11.91l107.9,107.89a8,8,0,0,0,12-.83c5.21-6.93,12.27-18.39,14.12-31.58" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M190.66,137.47l39-39.13a8,8,0,0,0,0-11.31L169,26.34a8,8,0,0,0-11.31,0L122.09,62" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}