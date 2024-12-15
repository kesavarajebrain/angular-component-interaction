import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SonComponent } from './son/son.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [RouterModule, SonComponent, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  parent_message: any;
  messageToChild: string | undefined;

  sendToChild() {
    this.messageToChild = this.parent_message;
    console.log(this.parent_message);
  }
}
