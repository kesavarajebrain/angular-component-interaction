import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HooksOrderComponent } from "../hooks-order/hooks-order.component";
@Component({
  selector: "app-ngondestroy",
  standalone: true,
  imports: [RouterModule,HooksOrderComponent],
  templateUrl: "./ngondestroy.component.html",
  styleUrls: ["./ngondestroy.component.scss"]
})

export class NgondestroyComponent implements OnInit {
  
  constructor() { 

  }

  ngOnInit() {

  }
}
