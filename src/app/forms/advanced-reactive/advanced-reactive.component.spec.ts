import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AdvancedReactiveComponent } from "./advanced-reactive.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("AdvancedReactiveComponent", () => {

  let fixture: ComponentFixture<AdvancedReactiveComponent>;
  let component: AdvancedReactiveComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [AdvancedReactiveComponent]
    });

    fixture = TestBed.createComponent(AdvancedReactiveComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
