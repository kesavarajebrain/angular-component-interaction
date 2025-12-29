import {
  Component,
  ViewChild,
  ViewContainerRef,
  TemplateRef,
  AfterViewInit
} from '@angular/core';
import { GlobalModalService } from '../global-modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: "app-common-modal",
  templateUrl: "./common-modal.component.html",
  styleUrls: ["./common-modal.component.scss"],
  standalone: true,
  imports: [CommonModule]
})

export class CommonModalComponent implements AfterViewInit {

  @ViewChild('headerVc', { read: ViewContainerRef }) headerVc!: ViewContainerRef;
  @ViewChild('bodyVc', { read: ViewContainerRef }) bodyVc!: ViewContainerRef;
  isOpen = false;

  constructor(private modalService: GlobalModalService) {
    //this.modalService.register(this); // since we register modal inside constructor modal doesnot have data, so it will throw error
  }


  ngAfterViewInit() {
    console.log('✅ GlobalModalComponent registered');
    // ✅ SAFE registration - so register modal afterView init
    this.modalService.register(this);
  }

  open(config: {
    header?: TemplateRef<any>;
    body: TemplateRef<any>;
    footer?: TemplateRef<any>;
  }) {
    this.clearAll();
    config.header && this.headerVc.createEmbeddedView(config.header);
    this.bodyVc.createEmbeddedView(config.body);
    this.isOpen = true;
  }

  close() {
    this.clearAll();
    this.isOpen = false;
  }

  private clearAll() {
    this.headerVc.clear();
    this.bodyVc.clear();
  }
}
