import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// menu items
import {MenuItemsComponent} from "../shared/menu-items/menu-items.component"
import { AdsenseComponent } from '../adsense/adsense.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, RouterModule,MenuItemsComponent,AdsenseComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
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
  
}
