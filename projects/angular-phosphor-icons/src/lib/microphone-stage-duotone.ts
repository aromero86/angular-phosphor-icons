import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[microphone-stage-duotone]',
  standalone: true,
})
export class UiIconMicrophoneStageDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M105.05,99.52l0,0L33.55,197a8,8,0,0,0,.79,10.38l14.3,14.3a8,8,0,0,0,10.38.79L156.5,151l0,0A64,64,0,0,1,105.05,99.52Z" opacity="0.2"/><circle cx="168" cy="88" r="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="213.25" y1="133.25" x2="122.75" y2="42.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="96" y1="160" x2="104" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M105,99.5,33.55,197a8,8,0,0,0,.79,10.38l14.3,14.3a8,8,0,0,0,10.38.79L156.5,151" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}