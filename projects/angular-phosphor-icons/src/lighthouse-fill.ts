import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[lighthouse-fill]',
  standalone: true,
})
export class UiIconLighthouseFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,80a8,8,0,0,0-8,8v16H188.85L184,55.2A8,8,0,0,0,181.31,50h0L138.44,11.88l-.2-.17a16,16,0,0,0-20.48,0l-.2.17L74.68,50v0A7.93,7.93,0,0,0,72,55.2L67.15,104H56V88a8,8,0,0,0-16,0v24a8,8,0,0,0,8,8H65.54l-9.47,94.48A16,16,0,0,0,72,232H184a16,16,0,0,0,15.92-17.56L190.46,120H208a8,8,0,0,0,8-8V88A8,8,0,0,0,208,80ZM87.24,64h81.52l4,40H136V88a8,8,0,0,0-16,0v16H83.23ZM72,216l4.81-48H179.19L184,216Z"/></svg>`;
    }
}