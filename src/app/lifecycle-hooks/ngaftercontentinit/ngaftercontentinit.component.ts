import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HooksOrderComponent } from "../hooks-order/hooks-order.component";

@Component({
  selector: "app-ngaftercontentinit",
  standalone: true,
  imports: [RouterModule,HooksOrderComponent],
  templateUrl: "./ngaftercontentinit.component.html",
  styleUrls: ["./ngaftercontentinit.component.scss"]
})

export class NgaftercontentinitComponent implements OnInit {
  
  constructor() { 

  }

  ngOnInit() {

  }
}
