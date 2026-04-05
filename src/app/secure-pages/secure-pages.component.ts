import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-secure-pages",
  imports: [RouterModule],
  templateUrl: "./secure-pages.component.html",
  styleUrls: ["./secure-pages.component.scss"]
})

export class SecurePagesComponent implements OnInit {

  users: any;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data['user'];
      console.log('Resolved Data:', this.users);
    });
  }
}
