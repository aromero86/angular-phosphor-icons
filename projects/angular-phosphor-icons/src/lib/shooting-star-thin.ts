import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[shooting-star-thin]',
  standalone: true,
})
export class UiIconShootingStarThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M164,129.66l35.78,21.53a5.46,5.46,0,0,0,8.19-5.86l-9.73-40.19,31.84-26.88A5.38,5.38,0,0,0,227,68.78l-41.79-3.31-16.1-38.14a5.51,5.51,0,0,0-10.12,0l-16.1,38.14-41.79,3.31a5.38,5.38,0,0,0-3.13,9.48l31.84,26.88L120,145.33a5.46,5.46,0,0,0,8.19,5.86Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="82.45" y1="117.55" x2="24" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="93.26" y1="178.74" x2="40" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="166.28" y1="177.72" x2="112" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}