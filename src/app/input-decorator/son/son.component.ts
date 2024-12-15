import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-son',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './son.component.html',
  styleUrl: './son.component.scss',
})
export class SonComponent {
  @Input() message: string | undefined;
}
