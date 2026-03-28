import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-lazy-load",
  imports: [RouterModule],
  templateUrl: "./lazy-load.component.html",
  styleUrls: ["./lazy-load.component.scss"]
})

export class LazyLoadComponent {

  tsCode: string = '';
  constructor(private http: HttpClient) {
    this.http.get('../../../assets/txtfiles/lazy.load.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);
  }
}
