import { Component, OnInit } from "@angular/core";
import { RouterModule } from '@angular/router';
// service imports here
import { SharedService } from "../../service/shared-service.service";

import { HttpClient, HttpClientModule } from '@angular/common/http';@Component({
  selector: "app-constructor",
  standalone: true,
  imports: [RouterModule,HttpClientModule],
  templateUrl: "./constructor.component.html",
  styleUrls: ["./constructor.component.scss"]
})

export class ConstructorComponent implements OnInit {
  
  tsCode: string = '';
  count = 0; // class-level variable

  // Inject the service in the constructor
  constructor(private sharedService: SharedService, private http: HttpClient) { 
    console.log('Constructor called');
  }

  ngOnInit() {
    // Safe to use the service now
    this.sharedService.setData('User from Constructor Component');

     this.http.get('../../../assets/txtfiles/constructor.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);

    const localCount = 10; // local variable
    console.log(localCount); // ✅ Works
    console.log(this.count); // ✅ Works
  }

  anotherMethod() {
    console.log(this.count); // ✅ Works
    // console.log(localCount); ❌ Error: localCount not defined here
  }
}
