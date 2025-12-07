import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TemplateDrivenComponent } from "./template-driven.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("TemplateDrivenComponent", () => {

  let fixture: ComponentFixture<TemplateDrivenComponent>;
  let component: TemplateDrivenComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [TemplateDrivenComponent]
    });

    fixture = TestBed.createComponent(TemplateDrivenComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
