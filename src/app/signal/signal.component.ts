import { Component, OnInit, signal } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-signal",
  standalone: true,
  imports: [RouterModule],
  templateUrl: "./signal.component.html",
  styleUrls: ["./signal.component.scss"]
})

export class SignalComponent implements OnInit {

  count = signal(0); // ✅ Step 1: Create a signal

  constructor() {

  }

  ngOnInit() {

  }

  increase() {
    this.count.update((value) => value + 1); // ✅ Step 2: Update signal
  }
}
