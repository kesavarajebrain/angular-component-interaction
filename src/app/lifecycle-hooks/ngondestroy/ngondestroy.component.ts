import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HooksOrderComponent } from "../hooks-order/hooks-order.component";
// import child
import { ChildComponent } from "./child/child.component";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
@Component({
  selector: "app-ngondestroy",
  standalone: true,
  imports: [RouterModule, HooksOrderComponent, ChildComponent, CommonModule, HttpClientModule],
  templateUrl: "./ngondestroy.component.html",
  styleUrls: ["./ngondestroy.component.scss"]
})

export class NgondestroyComponent {
  showCounter = true;
  tsCode = '';
  constructor(private http: HttpClient) {
    this.http.get('../../../assets/txtfiles/ngondestroy.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);
  }

  toggle() {
    this.showCounter = !this.showCounter;
  }
}
