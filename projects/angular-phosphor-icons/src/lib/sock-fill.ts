import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[sock-fill]',
  standalone: true,
})
export class UiIconSockFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M192,16H104A16,16,0,0,0,88,32v76.69L49.25,147.43a58.92,58.92,0,0,0,83.32,83.32L201,162.34a23.85,23.85,0,0,0,7-17V32A16,16,0,0,0,192,16Zm0,16h0V56H104V32Zm-2.34,119L157.8,182.88a48,48,0,0,1,34.2-70.2v32.69A8,8,0,0,1,189.66,151Z"/></svg>`;
    }
}