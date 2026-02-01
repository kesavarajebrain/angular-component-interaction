import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModalComponent } from './global-modal/modal/common-modal.component';
import { GoToTopComponent } from './shared/menu-items/go-to-top/go-to-top.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModalComponent,GoToTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}