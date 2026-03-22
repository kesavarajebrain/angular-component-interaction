import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SignalFormComponent } from "./signal-form.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SignalFormComponent", () => {

  let fixture: ComponentFixture<SignalFormComponent>;
  let component: SignalFormComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SignalFormComponent]
    });

    fixture = TestBed.createComponent(SignalFormComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
