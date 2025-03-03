import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[flower-light]',
  standalone: true,
})
export class UiIconFlowerLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M111.71,100.45C103.81,85.56,96,67.85,96,56a32,32,0,0,1,64,0c0,11.85-7.81,29.56-15.71,44.45" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M96,128.33c-16.85-.6-36.09-2.69-46.35-8.62a32,32,0,1,1,32-55.42c10.26,5.92,21.7,21.54,30.64,35.83" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M112.29,155.88c-8.94,14.29-20.38,29.91-30.64,35.83a32,32,0,1,1-32-55.42c10.26-5.93,29.5-8,46.35-8.62" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M144.29,155.55C152.19,170.44,160,188.15,160,200a32,32,0,0,1-64,0c0-11.85,7.81-29.56,15.71-44.45" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M160,127.67c16.85.6,36.09,2.69,46.35,8.62a32,32,0,1,1-32,55.42c-10.26-5.92-21.7-21.54-30.64-35.83" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M143.71,100.12c8.94-14.29,20.38-29.91,30.64-35.83a32,32,0,1,1,32,55.42c-10.26,5.93-29.5,8-46.35,8.62" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}