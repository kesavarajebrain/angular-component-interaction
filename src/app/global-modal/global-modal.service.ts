import { Injectable, TemplateRef } from "@angular/core";
import { CommonModalComponent } from "./modal/common-modal.component";
/**
 * @description
 * @class
 */
@Injectable({
  providedIn: 'root'
})
export class GlobalModalService {

  private modal!: CommonModalComponent;

  register(modal: CommonModalComponent) {
    this.modal = modal;
  }

  open(config: {
    header?: TemplateRef<any>;
    body: TemplateRef<any>;
  }) {
    console.log(config)
    if (!this.modal) {
      console.error('GlobalModalComponent not registered yet');
      return;
    }
    this.modal.open(config);
  }

  close() {
    this.modal.close();
  }

}
