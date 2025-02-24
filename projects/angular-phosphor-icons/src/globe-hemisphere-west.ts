import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[globe-hemisphere-west]',
  standalone: true,
})
export class UiIconGlobeHemisphereWest {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M75.88,123.26,89.2,100a8,8,0,0,1,6.94-4h16.71a7.9,7.9,0,0,0,3.86-1L129,88.24a7.12,7.12,0,0,0,1.49-1.07l26.92-24.33A8,8,0,0,0,159,53l-10.5-18.81" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M67.78,53.23,56,81.08A8,8,0,0,0,55.88,87l11.5,30.67a8,8,0,0,0,5.81,5l21.43,4.61a8,8,0,0,1,5.52,4.33l3.8,7.87a8,8,0,0,0,7.2,4.51h13.8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M213.09,172.48l-52.38-32.22a8.11,8.11,0,0,0-3.12-1.11l-22.82-3.08a8,8,0,0,0-8.38,4.67l-13.7,30.74a8,8,0,0,0,1.44,8.69l19.74,20.33a8,8,0,0,1,2,6.95l-3.17,16.44" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}