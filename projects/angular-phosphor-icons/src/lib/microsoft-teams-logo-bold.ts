import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[microsoft-teams-logo-bold]',
  standalone: true,
})
export class UiIconMicrosoftTeamsLogoBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="28" y="68" width="120" height="120" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="104" y1="104" x2="72" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="88" y1="152" x2="88" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M106.33,68A32,32,0,1,1,148,85.67" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M148,88h36a8,8,0,0,1,8,8v72a56,56,0,0,1-56,56h0a56,56,0,0,1-52.32-36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M184,88h39.26A4.74,4.74,0,0,1,228,92.74V152a32,32,0,0,1-38.15,31.41" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M167.65,51.27A24,24,0,1,1,188,88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}