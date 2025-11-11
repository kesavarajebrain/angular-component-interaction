import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// custom structural directive
import { HasRoleDirective} from './custom-directive/structural-directive/has-role.directive';
// custom attribute directive
import {HighlightDirective} from './custom-directive/attribute-directive/highlight.directive';

@Component({
  selector: "app-directives",
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, HasRoleDirective,HighlightDirective],
  templateUrl: "./directives.component.html",
  styleUrls: ["./directives.component.scss"]
})

export class DirectivesComponent {

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
