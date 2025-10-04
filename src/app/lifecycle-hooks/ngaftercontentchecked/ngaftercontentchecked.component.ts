import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HooksOrderComponent } from "../hooks-order/hooks-order.component";

@Component({
  selector: "app-ngaftercontentchecked",
  standalone: true,
  imports: [RouterModule,HooksOrderComponent],
  templateUrl: "./ngaftercontentchecked.component.html",
  styleUrls: ["./ngaftercontentchecked.component.scss"]
})

export class NgaftercontentcheckedComponent implements OnInit {
  
  constructor() { 

  }

  ngOnInit() {

  }
}
