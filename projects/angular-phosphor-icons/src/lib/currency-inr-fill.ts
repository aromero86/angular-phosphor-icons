import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[currency-inr-fill]',
  standalone: true,
})
export class UiIconCurrencyInrFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm38.32,72H176a8,8,0,0,1,0,16h-8.19A44.06,44.06,0,0,1,124,152H111.32l53.59,41.69a8,8,0,1,1-9.82,12.62l-72-56A8,8,0,0,1,88,136h36a28,28,0,0,0,27.71-24H88a8,8,0,0,1,0-16h61.29A28,28,0,0,0,124,80H88a8,8,0,0,1,0-16h88a8,8,0,0,1,0,16H157.92A43.87,43.87,0,0,1,166.32,96Z"/></svg>`;
    }
}