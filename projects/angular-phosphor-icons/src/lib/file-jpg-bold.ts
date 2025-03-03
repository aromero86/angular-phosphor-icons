import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[file-jpg-bold]',
  standalone: true,
})
export class UiIconFileJpgBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="148 32 148 92 208 92" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M48,108V40a8,8,0,0,1,8-8h96l56,56v20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M104,192h16a20,20,0,0,0,0-40H104v56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M208,188h4v12.87A22.12,22.12,0,0,1,196,208c-13.25,0-24-12.54-24-28s10.75-28,24-28a21.28,21.28,0,0,1,12,3.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M32,190a18,18,0,0,0,36,0V152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}