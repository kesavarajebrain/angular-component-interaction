import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HooksOrderComponent } from "../hooks-order/hooks-order.component";
// import child component
import { ChildComponent } from "./child/child.component";
// 
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-ngaftercontentinit",
    imports: [RouterModule, HooksOrderComponent, ChildComponent],
    templateUrl: "./ngaftercontentinit.component.html",
    styleUrls: ["./ngaftercontentinit.component.scss"]
})

export class NgaftercontentinitComponent implements OnInit {

  public tsCode = '';

  constructor(private http: HttpClient) {
    this.http.get('../../../assets/txtfiles/ngaftercontentinit.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);
  }

  ngOnInit() {

  }
}
