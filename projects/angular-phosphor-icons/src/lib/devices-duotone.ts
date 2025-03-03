import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[devices-duotone]',
  standalone: true,
})
export class UiIconDevicesDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M160,96a16,16,0,0,1,16-16h24V64a16,16,0,0,0-16-16H40A16,16,0,0,0,24,64v96a16,16,0,0,0,16,16H160Z" opacity="0.2"/><rect x="136" y="104" width="128" height="80" rx="16" transform="translate(344 -56) rotate(90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="208" x2="88" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M160,176H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H184a16,16,0,0,1,16,16V80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="192" y1="112" x2="208" y2="112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}