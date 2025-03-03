import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[drone-duotone]',
  standalone: true,
})
export class UiIconDroneDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="76" cy="76" r="36" opacity="0.2"/><circle cx="180" cy="76" r="36" opacity="0.2"/><circle cx="76" cy="180" r="36" opacity="0.2"/><circle cx="180" cy="180" r="36" opacity="0.2"/><line x1="152" y1="104" x2="184" y2="72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="72" y1="184" x2="104" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="152" y1="152" x2="184" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="72" y1="72" x2="104" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M146.05,64A36,36,0,1,1,192,110" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M192,146.05A36,36,0,1,1,146.05,192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M110,192A36,36,0,1,1,64,146.05" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M64,110A36,36,0,1,1,110,64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="104" y="104" width="48" height="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}