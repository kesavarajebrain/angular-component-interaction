import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-child",
  standalone:true,
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"]
})

export class ChildComponent implements OnInit, OnDestroy {

  counter = 0;
  timer!: any;

  ngOnInit() {
    console.log('✅ CounterComponent Created');
    this.timer = setInterval(() => {
      this.counter++;
    }, 1000);
    console.log(this.timer)
  }

  ngOnDestroy() {
    console.log('🧹 CounterComponent Destroyed');
    clearInterval(this.timer);
  }
}
