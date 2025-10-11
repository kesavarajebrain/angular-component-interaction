import { Component, Input, ViewChild, ElementRef, AfterViewChecked } from "@angular/core";

@Component({
  selector: "app-child",
  standalone: true,
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"]
})

export class ChildComponent implements AfterViewChecked {
  @ViewChild('counter') counterRef!: ElementRef<HTMLDivElement>;

  @Input() count = 0;

  constructor() {

  }

  ngAfterViewChecked(): void {
    if (this.counterRef) {
      if (this.count % 2 === 0) {
        this.counterRef.nativeElement.style.background = '#67f95aff'; // green shade
        this.counterRef.nativeElement.style.color = 'black';
        this.counterRef.nativeElement.style.fontWeight = '400';

      } else {
        this.counterRef.nativeElement.style.background = '#f77055ff'; // red shade
        this.counterRef.nativeElement.style.color = 'white';
        this.counterRef.nativeElement.style.fontWeight = 'bold';
      }
    }
  }
}
