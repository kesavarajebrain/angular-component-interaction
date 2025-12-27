import {
  Component,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: "app-child-component",
  templateUrl: "./child-component.component.html",
  styleUrls: ["./child-component.component.scss"],
  standalone: true,
})

export class ChildComponentComponent implements AfterViewInit {
  
 @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  @ViewChild('defaultTpl') defaultTpl!: TemplateRef<any>;
  @ViewChild('loadingTpl') loadingTpl!: TemplateRef<any>;
  @ViewChild('errorTpl') errorTpl!: TemplateRef<any>;

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
}
