import { Component }          from '@angular/core';
// --------------------------------------------------------
import { UiIconUmbrellaBold } from 'angular-phosphor-icons/umbrella-bold'
// --------------------------------------------------------
import { UiIcon }             from './ui-icon';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        UiIcon,
        UiIconUmbrellaBold,
    ],
})
export class AppComponent { }
