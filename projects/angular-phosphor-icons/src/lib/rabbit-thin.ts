import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[rabbit-thin]',
  standalone: true,
})
export class UiIconRabbitThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="100" cy="164" r="8"/><circle cx="156" cy="164" r="8"/><polyline points="144 200 128 213.31 112 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M146.56,98.73C152.16,72.39,167,16,190.94,16c28.22,0,18.27,65.06-6.91,113" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M109.44,98.73C103.84,72.39,89,16,65.06,16,36.84,16,46.79,81.06,72,129" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M191.71,153.82A44,44,0,1,1,128,213.3a44,44,0,1,1-63.71-59.48,64,64,0,0,1,127.42,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}