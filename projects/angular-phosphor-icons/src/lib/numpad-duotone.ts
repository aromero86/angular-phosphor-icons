import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[numpad-duotone]',
  standalone: true,
})
export class UiIconNumpadDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M64,48H192a0,0,0,0,1,0,0V200a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V48A0,0,0,0,1,64,48Z" opacity="0.2"/><circle cx="64" cy="48" r="16"/><circle cx="128" cy="48" r="16"/><circle cx="192" cy="48" r="16"/><circle cx="64" cy="104" r="16"/><circle cx="128" cy="104" r="16"/><circle cx="192" cy="104" r="16"/><circle cx="64" cy="160" r="16"/><circle cx="128" cy="160" r="16"/><circle cx="128" cy="216" r="16"/><circle cx="192" cy="160" r="16"/></svg>`;
    }
}