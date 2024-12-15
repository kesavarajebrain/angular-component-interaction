import {  Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'app-component-two',
  standalone: true,
  imports: [],
  templateUrl: './component-two.component.html',
  styleUrl: './component-two.component.scss'
})
export class ComponentTwoComponent implements OnInit{
  receiveData: any;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.currentData.subscribe(data => {
      this.receiveData = data;
    })
  }

}
