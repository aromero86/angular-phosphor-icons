import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[boxing-glove-duotone]',
  standalone: true,
})
export class UiIconBoxingGloveDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M168,24H120A48,48,0,0,0,72,72v8H56a24,24,0,0,0-24,24v29.19a8,8,0,0,0,1.75,5L72,176v40a8,8,0,0,0,8,8H192a8,8,0,0,0,8-8V176l15.69-54.92a7.85,7.85,0,0,0,.31-2.2V72A48,48,0,0,0,168,24Z" opacity="0.2"/><path d="M72,104V72a48,48,0,0,1,48-48h48a48,48,0,0,1,48,48v46.88a7.85,7.85,0,0,1-.31,2.2L200,176v40a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V176L33.75,138.19a8,8,0,0,1-1.75-5V104A24,24,0,0,1,56,80H72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="104" y1="160" x2="168" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="168" y1="160" x2="104" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}