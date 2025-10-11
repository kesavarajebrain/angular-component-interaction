import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: "app-child",
  standalone: true,
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"]
})

export class ChildComponent implements AfterViewInit {

  public status = '🕐 Waiting for parent...';

  @ViewChild('childDiv') divRef!: ElementRef<HTMLDivElement>;
  @ViewChild('childStatusDiv') childStatusDivRef!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    console.log('✅ Child ngAfterViewInit called');
    setTimeout(() => {
      // Now DOM is ready, we can modify safely
      this.divRef.nativeElement.style.background = 'lightgreen';
      this.divRef.nativeElement.innerText = 'DOM is Ready ✅';
    }, 2000)
  }

  updateStatus(newStatus: string) {
    this.status = newStatus;
  }

   update(newStatus: string) {
    this.status = newStatus;
    this.childStatusDivRef.nativeElement.style.fontStyle = 'italic';
    this.childStatusDivRef.nativeElement.style.background = 'pink';
    // changing another one also here
    this.divRef.nativeElement.style.background = '#c9d2f4d0';
    this.divRef.nativeElement.style.fontWeight = 'bold';
  }
}
