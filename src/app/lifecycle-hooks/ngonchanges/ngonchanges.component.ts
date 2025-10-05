import { Component } from "@angular/core";
import { RouterModule } from '@angular/router';
import { HooksOrderComponent } from "../hooks-order/hooks-order.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

// child 
import { ChildComponent } from "./child/child.component";
@Component({
  selector: "app-ngonchanges",
  standalone: true,
  imports: [RouterModule,HooksOrderComponent,ChildComponent,HttpClientModule],
  templateUrl: "./ngonchanges.component.html",
  styleUrls: ["./ngonchanges.component.scss"]
})

export class NgonchangesComponent  {
  
  parentCount = 0;
  tsCode: string = '';


  constructor( private http: HttpClient) { 
  this.http.get('../../../assets/txtfiles/ngonchanges.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);
  }

  increase() {
    this.parentCount++;
  }
}
