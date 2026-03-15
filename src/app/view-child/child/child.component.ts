import { Component } from '@angular/core';

@Component({
    selector: 'app-child',
    imports: [],
    templateUrl: './child.component.html',
    styleUrl: './child.component.scss'
})
export class ChildComponent {
  childMethod() {
    alert("This is a alert from the Child component via childMethod()");
  }
}
