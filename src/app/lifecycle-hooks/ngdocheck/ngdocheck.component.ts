import { Component } from "@angular/core";
import { RouterModule } from '@angular/router';
import { HooksOrderComponent } from "../hooks-order/hooks-order.component";
// import child compoenent
import { ChildComponent } from "./child/child.component";

import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: "app-ngdocheck",
  standalone: true,
  imports: [RouterModule, HooksOrderComponent, ChildComponent, FormsModule, HttpClientModule],
  templateUrl: "./ngdocheck.component.html",
  styleUrls: ["./ngdocheck.component.scss"]
})

export class NgdocheckComponent {

  user = { name: 'Kesava', age: 30 };
  formValue = { name: '' }
  tsCode = ''

  constructor(private http: HttpClient) {
    this.http.get('../../../assets/txtfiles/ngdocheck.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);
  }

  changeName() {
    this.user.name = this.formValue.name; // same object, new name - doCheck triggers
  }

  replaceUser() {
    this.user = { name: 'Ravi', age: 30 }; // New object - OnChanges triggers
  }
}
