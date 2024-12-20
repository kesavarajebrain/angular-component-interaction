import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [ChildComponent,RouterModule],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.scss',
})
export class ViewChildComponent implements AfterViewInit {
  @ViewChild('myInput') myInputElementRef!: ElementRef;
  // child component
  @ViewChild(ChildComponent) childRef!: ChildComponent;

  ngAfterViewInit(): void {
    this.myInputElementRef.nativeElement.focus();
    console.log(this.myInputElementRef);
  }

  callChildComponent() {
    this.childRef.childMethod();
  }
}
