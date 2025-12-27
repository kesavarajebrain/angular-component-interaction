import { Injectable, TemplateRef  } from "@angular/core";
import { CommonModalComponent } from "./modal/common-modal.component";
/**
 * @description
 * @class
 */
@Injectable({
  providedIn:'root'
})
export class GlobalModalService {

  private modal!: CommonModalComponent;

  register(modal: CommonModalComponent) {
    this.modal = modal;
  }

  open(template: TemplateRef<any>) {
    console.log(template)
     if (!this.modal) {
    console.error('GlobalModalComponent not registered yet');
    return;
  }
    this.modal.open(template);
  }

  close() {
    this.modal.close();
  }

}
