import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[battery-charging-fill]',
  standalone: true,
})
export class UiIconBatteryChargingFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M256,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM224,80v96a24,24,0,0,1-24,24H32A24,24,0,0,1,8,176V80A24,24,0,0,1,32,56H200A24,24,0,0,1,224,80Zm-85.19,43.79A8,8,0,0,0,132,120H112.94l10.22-20.42a8,8,0,1,0-14.32-7.16l-16,32A8,8,0,0,0,100,136h19.06l-10.22,20.42a8,8,0,0,0,14.32,7.16l16-32A8,8,0,0,0,138.81,123.79Z"/></svg>`;
    }
}