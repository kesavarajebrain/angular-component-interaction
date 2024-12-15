import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DaughterComponent } from './daughter/daughter.component';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [RouterModule, DaughterComponent],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss',
})
export class OutputComponent {
  childMessage: string | undefined;
  receiveMsgFrmChild(value: string) {
    this.childMessage = value;
    console.log(value);
  }
}
