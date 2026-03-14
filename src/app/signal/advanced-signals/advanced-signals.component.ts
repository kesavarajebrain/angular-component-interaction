import { HttpClientModule } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-advanced-signals",
  imports:[RouterModule,HttpClientModule],
  standalone:true,
  templateUrl: "./advanced-signals.component.html",
  styleUrls: ["./advanced-signals.component.scss"]
})

export class AdvancedSignalsComponent implements OnInit {
  
  constructor() { 

  }

  ngOnInit() {

  }
}
