import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AdvancedSignalsComponent } from "./advanced-signals.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("AdvancedSignalsComponent", () => {

  let fixture: ComponentFixture<AdvancedSignalsComponent>;
  let component: AdvancedSignalsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [AdvancedSignalsComponent]
    });

    fixture = TestBed.createComponent(AdvancedSignalsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
