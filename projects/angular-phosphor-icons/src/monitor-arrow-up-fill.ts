import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[monitor-arrow-up-fill]',
  standalone: true,
})
export class UiIconMonitorArrowUpFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M168,224a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224ZM232,64V176a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V64A24,24,0,0,1,48,40H208A24,24,0,0,1,232,64Zm-74.34,42.34-24-24a8,8,0,0,0-11.32,0l-24,24a8,8,0,0,0,11.32,11.32L120,107.31V152a8,8,0,0,0,16,0V107.31l10.34,10.35a8,8,0,0,0,11.32-11.32Z"/></svg>`;
    }
}