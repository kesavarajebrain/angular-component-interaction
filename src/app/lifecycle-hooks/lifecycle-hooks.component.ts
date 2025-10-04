import { Component, OnInit } from "@angular/core";
import { RouterModule } from '@angular/router';

@Component({
  selector: "app-lifecycle-hooks",
  standalone: true,
  imports: [RouterModule],
  templateUrl: "./lifecycle-hooks.component.html",
  styleUrls: ["./lifecycle-hooks.component.scss"]
})

export class LifecycleHooksComponent implements OnInit {
  
  constructor() { 

  }

  ngOnInit() {

  }
}
