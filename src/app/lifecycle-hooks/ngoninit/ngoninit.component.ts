import { Component, OnInit,Input } from "@angular/core";
import { RouterModule } from '@angular/router';
import { HooksOrderComponent } from "../hooks-order/hooks-order.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
@Component({
  selector: "app-ngoninit",
  imports: [RouterModule, HooksOrderComponent,HttpClientModule],
  standalone: true,
  templateUrl: "./ngoninit.component.html",
  styleUrls: ["./ngoninit.component.scss"]
})

export class NgoninitComponent implements OnInit {

  message: string = '';
  tsCode: string = '';

  @Input() data!: string;
  @Input() dataOne?: string;
  @Input() dataTwo: string = '';

  constructor( private http: HttpClient) {
    console.warn('ngOnInit component constructor')
    console.log('✅ Constructor called');
  }

  ngOnInit() {
    console.warn('ngOnInit component ngOnInit')
    console.log('🚀 ngOnInit called');
    this.message = 'Hello from ngOnInit!';
    console.log(this.message);

    // Load the TypeScript code from an external file

      this.http.get('../../../assets/txtfiles/ngoninit.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);

      let isLoggedIn = true; 
      console.warn( 'Single ! - !isLoggedIn');
      console.log( '!isLoggedIn ->',!isLoggedIn);
      console.warn( 'Double !! - !!isLoggedIn');
      console.log( '!!isLoggedIn ->',!!isLoggedIn);

  }
}
