import { Component, OnInit } from "@angular/core";
import { RouterModule } from '@angular/router';
// import sub component
import { SubComponentComponent } from "./sub-component/sub-component.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
@Component({
  selector: "app-change-detection",
  standalone: true,
  imports: [RouterModule, SubComponentComponent, HttpClientModule],
  templateUrl: "./change-detection.component.html",
  styleUrls: ["./change-detection.component.scss"]
})

export class ChangeDetectionComponent implements OnInit {

  public name = 'Kesava';
  public status: any;
  public tsCode = '';

  constructor(private http:HttpClient) {
    this.http.get('../../../assets/txtfiles/change-detection-default.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);
  }

  ngOnInit(): void {
    this.update();
  }

  update() {
    setTimeout(() => {
      this.name = 'Raj';
      this.status = '✅ Works automatically (Angular detects change and updates UI)'
    }, 3000);
  }
}
