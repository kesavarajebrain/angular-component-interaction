import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// custom structural directive
import { HasRoleDirective } from './custom-directive/structural-directive/has-role.directive';
// custom attribute directive
import { HighlightDirective } from './custom-directive/attribute-directive/highlight.directive';

import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AdsenseComponent } from "../adsense/adsense.component";

@Component({
  selector: "app-directives",
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, HasRoleDirective, HighlightDirective, HttpClientModule,AdsenseComponent],
  templateUrl: "./directives.component.html",
  styleUrls: ["./directives.component.scss"]
})

export class DirectivesComponent {

  constructor(private http: HttpClient) {
    this.http.get('../../../assets/txtfiles/directives.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);

         this.http.get('../../../assets/txtfiles/directives-1.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode1 = code);
  }
  public tsCode = '';
  public tsCode1 = '';
  public username?: string;
  public status?: string = 'login'; // default value
  public role?: string = ''; // default value
  public text = '';

  get isLoggedIn(): boolean {
    if (this.status === 'logout') {
      this.username = '';
    }
    return this.status === 'login';
  }

  public items = [
    'HTML',
    'CSS',
    'Bootstrap',
    'Javascript',
    'Angular',
    'React'
  ]

}
