import {
  Component,
  ViewChild,
  ViewContainerRef,
  TemplateRef,
  AfterViewInit
} from '@angular/core';
import { GlobalModalService } from '../global-modal.service';

@Component({
  selector: "app-common-modal",
  templateUrl: "./common-modal.component.html",
  styleUrls: ["./common-modal.component.scss"],
  standalone:true,
})

export class CommonModalComponent implements AfterViewInit {

  @ViewChild('modalContainer', { read: ViewContainerRef })
  modalContainer!: ViewContainerRef;

  constructor(private modalService: GlobalModalService) {
    //this.modalService.register(this); // since we register modal inside constructor modal doesnot have data, so it will throw error
  }

   ngAfterViewInit() {
    console.log('✅ GlobalModalComponent registered');
    // ✅ SAFE registration - so register modal afterView init
    this.modalService.register(this);
  }

  open(template: TemplateRef<any>) {
    //this.modalContainer.clear();
    this.modalContainer.createEmbeddedView(template);
  }

  close() {
    this.modalContainer.clear();
  }
}
