import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[open-ai-logo-bold]',
  standalone: true,
})
export class UiIconOpenAiLogoBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M108,139.55V74.88L148.5,51.5a48,48,0,0,1,66.4,64.08" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M128,151.09,72,118.76V72a48,48,0,0,1,88.69-25.47" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M148,139.55,92,171.88,51.5,148.5A48,48,0,0,1,73.79,59" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M148,116.45v64.67L107.5,204.5a48,48,0,0,1-66.4-64.08" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M128,104.91l56,32.33V184a48,48,0,0,1-88.69,25.47" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M108,116.45l56-32.33,40.5,23.38a48,48,0,0,1-22.29,89.55" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}