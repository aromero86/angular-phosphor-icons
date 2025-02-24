import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[list-star-fill]',
  standalone: true,
})
export class UiIconListStarFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM64,72H192a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm0,48H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm40,64H64a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm94.55-40.71L180.69,158l5.44,22a4,4,0,0,1-1.49,4.17,4.05,4.05,0,0,1-2.39.79,4,4,0,0,1-2-.55L160,172.54l-20.22,11.91a4,4,0,0,1-5.91-4.41l5.44-22-17.86-14.75a4,4,0,0,1,2.24-7.07l23.58-1.82,9.06-21a4,4,0,0,1,7.34,0l9.06,21,23.58,1.82a4,4,0,0,1,2.24,7.07Z"/></svg>`;
    }
}