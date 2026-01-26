import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-ssr",
  templateUrl: "./ssr.component.html",
  styleUrls: ["./ssr.component.scss"],
  standalone:true,
  imports:[RouterModule]
})

export class SsrComponent implements OnInit {
  
  constructor() { 

  }

  ngOnInit() {

  }
}
