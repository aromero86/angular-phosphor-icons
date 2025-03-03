import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[washing-machine-bold]',
  standalone: true,
})
export class UiIconWashingMachineBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="176" cy="80" r="16"/><rect x="36" y="36" width="184" height="184" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="132" y1="148" x2="148" y2="132" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="108" y1="124" x2="116" y2="116" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M183.33,119.32a56,56,0,1,1-46.66-46.65" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}