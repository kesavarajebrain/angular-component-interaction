import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HooksOrderComponent } from "./hooks-order.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("HooksOrderComponent", () => {

  let fixture: ComponentFixture<HooksOrderComponent>;
  let component: HooksOrderComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [HooksOrderComponent]
    });

    fixture = TestBed.createComponent(HooksOrderComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
