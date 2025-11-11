import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// menu items
import {MenuItemsComponent} from "../shared/menu-items/menu-items.component"

declare var adsbygoogle: any; // ✅ Declare this before @Component
declare global {
  interface Window {
    adsbygoogle: any;
  }
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, RouterModule,MenuItemsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements AfterViewInit{
  title = 'angular-interaction';
  interpolation = `SYNTAX : {{ }} | string from the TS file and displayed in HTML`;
  proberty_binding = 'https://picsum.photos/100/100';
  
  count = 0;
  inputValue!: string;
  two_way = `{{}}`;
  name!: string;
  private _customerName!: string;
  increseCount() {
    this.count++;
  }

  displayName(event:any){
    console.log("#######", event);
    this.name = event;
  }

  // getter
  get customerName(){
    console.log("GEtting value -> ", this._customerName);
    return this._customerName;
  }

  // setter
  set customerName(value:string){
    console.log("SEtting value -> ", value);
    this._customerName = value;
  }

  // redirect git
  redirect(){
    window.open("https://github.com/kesavarajebrain/angular-component-interaction", "_blank");
  }
  
  ngAfterViewInit() {
    // ✅ Trigger AdSense only after the view loads
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }

}
