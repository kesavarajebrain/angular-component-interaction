import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-child",
  standalone:true,
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"]
})

export class ChildComponent implements OnChanges {
  
   @Input() count!: number;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges fired:', changes);
    if (changes['count']) {
      const prev = changes['count'].previousValue;
      const curr = changes['count'].currentValue;
      console.log(`Count changed from ${prev} to ${curr}`);
    }
  }
}
