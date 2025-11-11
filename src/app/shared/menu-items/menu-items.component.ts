import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-menu-items",
  standalone:true,
  imports:[RouterModule],
  templateUrl: "./menu-items.component.html",
  styleUrls: ["./menu-items.component.scss"]
})

export class MenuItemsComponent implements OnInit {
  
  constructor() { 

  }

  ngOnInit() {

  }
}
