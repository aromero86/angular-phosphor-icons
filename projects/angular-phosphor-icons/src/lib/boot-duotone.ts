import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[boot-duotone]',
  standalone: true,
})
export class UiIconBootDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M240,168a48,48,0,0,0-48-48H152V56a8,8,0,0,0-8-8H32c12,31.35,9.22,87.94,0,120Z" opacity="0.2"/><line x1="152" y1="120" x2="112" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="152" y1="88" x2="112" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M240,168v32a8,8,0,0,1-8,8H205.89a8.08,8.08,0,0,1-3.58-.84l-12.62-6.32a8.08,8.08,0,0,0-3.58-.84H169.89a8.08,8.08,0,0,0-3.58.84l-12.62,6.32a8.08,8.08,0,0,1-3.58.84H121.89a8.08,8.08,0,0,1-3.58-.84l-12.62-6.32a8.08,8.08,0,0,0-3.58-.84H85.89a8.08,8.08,0,0,0-3.58.84l-12.62,6.32a8.08,8.08,0,0,1-3.58.84H40a8,8,0,0,1-8-8V168c9.22-32.06,12-88.65,0-120H144a8,8,0,0,1,8,8v64h40A48,48,0,0,1,240,168Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="32" y1="168" x2="240" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}