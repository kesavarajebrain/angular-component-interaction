import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-jwt",
  standalone:true,
  imports:[RouterModule],
  templateUrl: "./jwt.component.html",
  styleUrls: ["./jwt.component.scss"]
})

export class JwtComponent implements OnInit {
  
  constructor() { 

  }

  ngOnInit() {

  }
}
