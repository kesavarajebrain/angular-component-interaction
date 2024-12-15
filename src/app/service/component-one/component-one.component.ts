import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'app-component-one',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './component-one.component.html',
  styleUrl: './component-one.component.scss'
})
export class ComponentOneComponent {
  message !:string;

  constructor(private sharedService: SharedService) {}

  send(){
    this.sharedService.setData(this.message)
  }
}
