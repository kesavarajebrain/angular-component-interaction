import { Component, OnInit } from "@angular/core";
import { RouterModule } from '@angular/router';
import { HooksOrderComponent } from "../hooks-order/hooks-order.component";

@Component({
  selector: "app-ngdocheck",
  standalone: true,
  imports: [RouterModule,HooksOrderComponent],
  templateUrl: "./ngdocheck.component.html",
  styleUrls: ["./ngdocheck.component.scss"]
})

export class NgdocheckComponent implements OnInit {
  
  constructor() { 

  }

  ngOnInit() {

  }
}
