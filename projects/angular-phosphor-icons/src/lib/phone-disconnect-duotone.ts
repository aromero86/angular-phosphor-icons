import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[phone-disconnect-duotone]',
  standalone: true,
})
export class UiIconPhoneDisconnectDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M225.94,95.83c17.29,17.29,18.63,42.29,4,61.12a8,8,0,0,1-9.26,2.47L171.58,142a8,8,0,0,1-4.86-5.8l-6.21-29.74a7.94,7.94,0,0,0-5.14-5.9,84.39,84.39,0,0,0-55.1.13,7.93,7.93,0,0,0-5.12,6l-5.9,29.51A8,8,0,0,1,84.38,142L35.29,159.42A8,8,0,0,1,26,157c-14.6-18.83-13.26-43.83,4-61.12C83.17,42.72,172.83,42.72,225.94,95.83Z" opacity="0.2"/><path d="M225.94,95.83c17.29,17.29,18.63,42.29,4,61.12a8,8,0,0,1-9.26,2.47L171.58,142a8,8,0,0,1-4.86-5.8l-6.21-29.74a7.94,7.94,0,0,0-5.14-5.9,84.39,84.39,0,0,0-55.1.13,7.93,7.93,0,0,0-5.12,6l-5.9,29.51A8,8,0,0,1,84.38,142L35.29,159.42A8,8,0,0,1,26,157c-14.6-18.83-13.26-43.83,4-61.12C83.17,42.72,172.83,42.72,225.94,95.83Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="200" x2="216" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}