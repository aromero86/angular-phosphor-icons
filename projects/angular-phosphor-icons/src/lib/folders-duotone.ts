import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[folders-duotone]',
  standalone: true,
})
export class UiIconFoldersDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M224,72H152L122.13,49.6a8,8,0,0,0-4.8-1.6H72a8,8,0,0,0-8,8V80H85.33a8,8,0,0,1,4.8,1.6L120,104h72a8,8,0,0,1,8,8v64h24.89a7.11,7.11,0,0,0,7.11-7.11V80A8,8,0,0,0,224,72Z" opacity="0.2"/><path d="M200,112v88.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.33a8,8,0,0,1,4.8,1.6L120,104h72A8,8,0,0,1,200,112Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M64,80V56a8,8,0,0,1,8-8h45.33a8,8,0,0,1,4.8,1.6L152,72h72a8,8,0,0,1,8,8v88.89a7.11,7.11,0,0,1-7.11,7.11H200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}