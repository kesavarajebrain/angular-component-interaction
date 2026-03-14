import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SignalExampleComponent } from "./signal-example.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SignalExampleComponent", () => {

  let fixture: ComponentFixture<SignalExampleComponent>;
  let component: SignalExampleComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SignalExampleComponent]
    });

    fixture = TestBed.createComponent(SignalExampleComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
