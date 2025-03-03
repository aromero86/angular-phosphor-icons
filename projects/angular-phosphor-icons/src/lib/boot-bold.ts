import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[boot-bold]',
  standalone: true,
})
export class UiIconBootBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M240,164v36a8,8,0,0,1-8,8H205.89a8.08,8.08,0,0,1-3.58-.84l-12.62-6.32a8.08,8.08,0,0,0-3.58-.84H169.89a8.08,8.08,0,0,0-3.58.84l-12.62,6.32a8.08,8.08,0,0,1-3.58.84H121.89a8.08,8.08,0,0,1-3.58-.84l-12.62-6.32a8.08,8.08,0,0,0-3.58-.84H85.89a8.08,8.08,0,0,0-3.58.84l-12.62,6.32a8.08,8.08,0,0,1-3.58.84H40a8,8,0,0,1-8-8V164c9.22-32.06,12-84.65,0-116H144a8,8,0,0,1,8,8v60h40A48,48,0,0,1,240,164Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="116" y1="116" x2="152" y2="116" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="32" y1="164" x2="240" y2="164" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}