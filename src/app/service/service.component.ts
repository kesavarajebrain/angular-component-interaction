import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [RouterModule,ComponentOneComponent,ComponentTwoComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {

}
