import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[chalkboard-teacher-bold]',
  standalone: true,
})
export class UiIconChalkboardTeacherBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="104" cy="148" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="188 172 188 84 68 84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M149.26,208H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H58.73a48,48,0,0,1,90.54,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}