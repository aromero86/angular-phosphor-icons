import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[hand-peace-thin]',
  standalone: true,
})
export class UiIconHandPeaceThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M72,131.6a20,20,0,0,1,8-39.19l20.81,4a20,20,0,1,1-8,39.19Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M56,152.72V160a72,72,0,0,0,72.55,72c39.7-.3,71.45-33.2,71.45-72.9v-3.34a48,48,0,0,0-38.59-47.07L140,104.41a20,20,0,0,0-8,39.19l15.37,3.07A28,28,0,0,0,152,179.6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M72,172.32a20,20,0,0,1,8-39.19l10,2a20,20,0,0,1-8,39.2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M101.37,96.53,88.69,49.18a20,20,0,1,1,38.63-10.35l17.85,66.61" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M150.54,106.51l18.14-67.68a20,20,0,0,1,38.63,10.35l-19.88,74.19" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}