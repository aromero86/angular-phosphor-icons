import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[google-drive-logo]',
  standalone: true,
})
export class UiIconGoogleDriveLogo {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M93.65,35.76A8,8,0,0,1,100.43,32h55.14a8,8,0,0,1,6.78,3.76l68.43,112.18a8,8,0,0,1,.17,8.21L203.62,204a8,8,0,0,1-6.94,4H59.32a8,8,0,0,1-6.94-4L25.05,156.15a8,8,0,0,1,.17-8.21Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="55.12" y1="206.8" x2="159.41" y2="32.98" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="200.88" y1="206.8" x2="96.59" y2="32.98" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="24" y1="152" x2="232" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}