import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[phone-slash-thin]',
  standalone: true,
})
export class UiIconPhoneSlashThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M120.51,72.19c38.15-2,77,11.23,105.43,39.64,17.29,17.29,18.63,42.29,4,61.12a8,8,0,0,1-9.26,2.47l-9.37-3.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M114.45,113.09a83.51,83.51,0,0,0-14.18,3.6,7.93,7.93,0,0,0-5.12,6l-5.9,29.51A8,8,0,0,1,84.38,158L35.29,175.42A8,8,0,0,1,26,173c-14.6-18.83-13.26-43.83,4-61.12A135.14,135.14,0,0,1,83.53,79.08" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}