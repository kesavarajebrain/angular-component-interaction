import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-standalone",
  standalone: true,
  imports: [RouterModule, FormsModule, HttpClientModule],
  templateUrl: "./standalone.component.html",
  styleUrls: ["./standalone.component.scss"],
})

export class StandaloneComponent {

  public status: string = '';
  public orderStatus: string = '';
  public tsCode: any

  public items = [
    { id: '1YCXD0', name: 'Television', price: 15000 },
    { id: '2REAW6', name: 'Fridge', price: 25000 },
    { id: '3NBCDR', name: 'Air Purifier', price: 7000 },
    { id: '4HYQA3', name: 'Fan', price: 1000 },
    { id: '5YH7PL', name: 'Mobile', price: 20000 },
  ]

  constructor(private http: HttpClient) {
    this.http.get('../../../assets/txtfiles/standalone.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);
  }
}
