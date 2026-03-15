import { HttpClient } from "@angular/common/http";
import { Component, signal } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SignalExampleComponent } from "./signal-example/signal-example.component";

@Component({
    selector: "app-signal",
    imports: [RouterModule, SignalExampleComponent],
    templateUrl: "./signal.component.html",
    styleUrls: ["./signal.component.scss"]
})

export class SignalComponent {
  public tsCode ='';
  count = signal(0); // ✅ Step 1: Create a signal

  constructor(private http:HttpClient) {
    this.http.get('../../../assets/txtfiles/signal.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);
  }

  increase() {
    this.count.update((value) => value + 1); // ✅ Step 2: Update signal
  }
}
