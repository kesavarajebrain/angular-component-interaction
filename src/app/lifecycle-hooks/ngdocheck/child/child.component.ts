import { Component, DoCheck, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-child",
  standalone: true,
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"]
})

export class ChildComponent implements DoCheck, OnChanges {

  @Input() user!: { name: string; age: number };

  public previousName = '';

  constructor() { }

  ngDoCheck() {
    console.warn('ngDoCheck')
    // it will trigger every changes like input detection and button clicks
    if (this.user.name !== this.previousName) {
      console.log(`Name changed from ${this.previousName} → ${this.user.name}`);
      this.previousName = this.user.name;
    }
  }

  ngOnChanges() {
    console.warn('ngOnChanges')
    // for the first time load only ngOnChanges will trigger / next time won't trigger
    if (this.user.name !== this.previousName) {
      console.log(`Name changed from ${this.previousName} → ${this.user.name}`);
      this.previousName = this.user.name;
    }
  }
}
