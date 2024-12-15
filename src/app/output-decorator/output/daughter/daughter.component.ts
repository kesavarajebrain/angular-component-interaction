import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-daughter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './daughter.component.html',
  styleUrl: './daughter.component.scss',
})
export class DaughterComponent {
  @Output() sendEventToParent = new EventEmitter();
  child_message: any;

  sendToParent() {
    this.sendEventToParent.emit(this.child_message);
  }
}
