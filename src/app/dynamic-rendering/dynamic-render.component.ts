import {
  Component,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
  AfterViewInit
} from '@angular/core';
import { RouterModule } from "@angular/router";
import { ChildComponentComponent } from "./child-component/child-component.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
// global modal
import { GlobalModalService } from '../global-modal/global-modal.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: "app-dynamic-render",
  templateUrl: "./dynamic-render.component.html",
  styleUrls: ["./dynamic-render.component.scss"],
  standalone: true,
  imports: [RouterModule, ChildComponentComponent, HttpClientModule, FormsModule,CommonModule],
})

export class Dynamicrender implements AfterViewInit {

  public tsCode: any;
  public modalCode: any;
  public status = ''; // initial state
  public users = [
  { name: 'Kesava', age: 29 },
  { name: 'Arun', age: 28 },
  { name: 'Suresh', age: 35 }
];

  constructor(private http: HttpClient, private modalService: GlobalModalService) {
    this.http.get('../../../assets/txtfiles/dynamic-render.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);
    this.http.get('../../../assets/txtfiles/common-modal.txt', { responseType: 'text' })
      .subscribe(code => this.modalCode = code);
  }

  // 🔹 WHERE UI WILL RENDER
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  // 🔹 WHAT CAN BE RENDERED
  @ViewChild('defaultTpl') defaultTpl!: TemplateRef<any>;
  @ViewChild('loadingTpl') loadingTpl!: TemplateRef<any>;
  @ViewChild('errorTpl') errorTpl!: TemplateRef<any>;
  @ViewChild('customTemplate') customTemplate!: TemplateRef<any>;
  @ViewChild('pageContent') pageContent!: TemplateRef<any>;

  ngAfterViewInit() {
    this.showDefault();
  }

  showDefault() {
    this.container.clear();
    this.container.createEmbeddedView(this.defaultTpl);
  }

  showLoading() {
    this.container.clear();
    this.container.createEmbeddedView(this.loadingTpl);
  }

  showError() {
    this.container.clear();
    this.container.createEmbeddedView(this.errorTpl);
  }

  showCustom() {
    this.container.clear();
    this.container.createEmbeddedView(this.customTemplate);
  }

  openModal() {
    this.modalService.open({
      header: this.customTemplate,
      body: this.errorTpl
    });
  }
}
