import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[article-ny-times-fill]',
  standalone: true,
})
export class UiIconArticleNyTimesFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM64,92a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8h72a8,8,0,0,1,8,8V92a8,8,0,0,1-16,0V88H100v48h4a8,8,0,0,1,0,16H80a8,8,0,0,1,0-16h4V88H64Zm136,92H80a8,8,0,0,1,0-16H200a8,8,0,0,1,0,16Zm0-32H136a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H152a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Z"/></svg>`;
    }
}