import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  standalone:true,
  styleUrls: ["./child.component.scss"]
})

export class ChildComponent implements AfterContentInit {

   @ContentChild('htmlContent') htmlContentRef!: ElementRef;


  ngAfterContentInit() {
    console.log('✅ ngAfterContentInit triggered');
    console.log('Projected content:', this.htmlContentRef.nativeElement.textContent);
  }
}
