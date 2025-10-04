import { Component, OnInit } from "@angular/core";
import { RouterModule } from '@angular/router';
import { HooksOrderComponent } from "../hooks-order/hooks-order.component";
@Component({
  selector: "app-ngonchanges",
  standalone: true,
  imports: [RouterModule,HooksOrderComponent],
  templateUrl: "./ngonchanges.component.html",
  styleUrls: ["./ngonchanges.component.scss"]
})

export class NgonchangesComponent implements OnInit {
  
  constructor() { 

  }

  ngOnInit() {

  }
}
