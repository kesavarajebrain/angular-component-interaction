import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HooksOrderComponent } from "../hooks-order/hooks-order.component";

@Component({
  selector: "app-ngafterviewchecked",
  standalone: true,
  imports: [RouterModule,HooksOrderComponent],
  templateUrl: "./ngafterviewchecked.component.html",
  styleUrls: ["./ngafterviewchecked.component.scss"]
})

export class NgafterviewcheckedComponent implements OnInit {
  
  constructor() { 

  }

  ngOnInit() {

  }
}
