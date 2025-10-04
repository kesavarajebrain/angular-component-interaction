import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HooksOrderComponent } from "../hooks-order/hooks-order.component";

@Component({
  selector: "app-ngafterviewinit",
  standalone: true,
  imports: [RouterModule,HooksOrderComponent],
  templateUrl: "./ngafterviewinit.component.html",
  styleUrls: ["./ngafterviewinit.component.scss"]
})

export class NgafterviewinitComponent implements OnInit {
  
  constructor() { 

  }

  ngOnInit() {

  }
}
