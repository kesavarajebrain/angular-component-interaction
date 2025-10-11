import { Component, AfterViewInit, AfterViewChecked } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HooksOrderComponent } from "../hooks-order/hooks-order.component";
// import child
import { ChildComponent } from "./child/child.component";
import { HttpClient , HttpClientModule} from '@angular/common/http';

@Component({
  selector: "app-ngafterviewchecked",
  standalone: true,
  imports: [RouterModule,HooksOrderComponent,ChildComponent,HttpClientModule],
  templateUrl: "./ngafterviewchecked.component.html",
  styleUrls: ["./ngafterviewchecked.component.scss"]
})

export class NgafterviewcheckedComponent implements AfterViewInit,AfterViewChecked {
  
  count = 0;
  tsCode = ''
  constructor(private http:HttpClient) { 
      this.http.get('../../../assets/txtfiles/ngafterviewchecked.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);

  }

  ngAfterViewInit() {
    console.log('✅ ngAfterViewInit - View Initialized',this.count); // we will get 0 only
  }

  ngAfterViewChecked() {
    console.log('🔁 ngAfterViewChecked - View Checked, count:', this.count); // here will get updated value
  }

  increase() {
    this.count++;
  }
}
