# Angular Phosphor Icons
**Angular Phosphor** is a set of components designed for utilizing [Phosphor Icons](https://phosphoricons.com/) in Angular via `Directives`

## install
```sh
npm install angular-phosphor-icons
```

You will need to create a component that will be used to render the icons. 

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'ui-icon',
    template: ``,
    styles: `
        :host {
            display: inline-flex;
        }
    `,
})
export class UiIcon { }
```

With this, now you can use the `phosphorIcon` directive to render the icons. Import your component, the desired directives and apply color and size to the icons.

```html
<ui-icon umbrella-bold style="color: red; height: 50px; width: 50px;"></ui-icon>
```
