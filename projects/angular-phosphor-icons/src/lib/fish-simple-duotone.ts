import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[fish-simple-duotone]',
  standalone: true,
})
export class UiIconFishSimpleDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M104.15,53.57C76,74.82,55.89,115.64,64.08,191.89c76.26,8.2,117.09-11.87,138.35-40A104,104,0,0,1,104.15,53.57Z" opacity="0.2"/><circle cx="156" cy="76" r="12"/><path d="M16,183.87C272,240,220,38.7,219,37,217.29,36,16-16,72.1,240" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M202.45,151.85a104,104,0,0,1-98.3-98.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}