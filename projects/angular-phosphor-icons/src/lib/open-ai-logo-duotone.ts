import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[open-ai-logo-duotone]',
  standalone: true,
})
export class UiIconOpenAiLogoDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M51.5,148.5a48,48,0,0,1-10.38-8.08h0a48,48,0,0,0,66.4,64.08L152,178.81V141.86L96,174.19Z" opacity="0.2"/><path d="M204.5,107.5,160,81.81l-32,18.48h0l56,32.33V184a48,48,0,0,1-1.81,13h0A48,48,0,0,0,204.5,107.5Z" opacity="0.2"/><path d="M104,141.86V77.19L148.5,51.5a47.77,47.77,0,0,1,12.19-5v0A48,48,0,0,0,72,72v51.38l32,18.48Z" opacity="0.2"/><path d="M104,141.86V77.19L148.5,51.5a48,48,0,0,1,66.4,64.08" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,155.71,72,123.38V72a48,48,0,0,1,88.69-25.47" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M152,141.86,96,174.19,51.5,148.5A48,48,0,0,1,73.79,59" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M152,114.14v64.67L107.5,204.5a48,48,0,0,1-66.4-64.08" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,100.29l56,32.33V184a48,48,0,0,1-88.69,25.47" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M104,114.14l56-32.33,44.5,25.69a48,48,0,0,1-22.29,89.55" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}