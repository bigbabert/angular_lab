import { Component } from '@angular/core';

import { ComponentCustom } from './component.custom';
import { ComponentList } from './component.list';

@Component({
  selector: 'my-app',
  template: '<mtm-title></mtm-title><mtm-list></mtm-list>',
  directives: [ComponentCustom, ComponentList]
})
export class AppComponent { }

