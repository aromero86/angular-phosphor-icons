import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[hand-eye-duotone]',
  standalone: true,
})
export class UiIconHandEyeDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M188,96a20,20,0,0,0-20,20V60a20,20,0,0,0-40,0V44a20,20,0,0,0-40,0V76a20,20,0,0,0-40,0v76a80,80,0,0,0,160,0V116A20,20,0,0,0,188,96ZM128,200c-32,0-48-32-48-32s16-32,48-32,48,32,48,32S160,200,128,200Z" opacity="0.2"/><path d="M88,76V44a20,20,0,0,1,40,0v60" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,60a20,20,0,0,1,40,0v60" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M168,120v-4a20,20,0,0,1,40,0v36a80,80,0,0,1-160,0V76a20,20,0,0,1,40,0v36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="168" r="12"/><path d="M80,168s16-32,48-32,48,32,48,32-16,32-48,32S80,168,80,168Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}