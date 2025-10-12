import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SignalComponent } from "./signal.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SignalComponent", () => {

  let fixture: ComponentFixture<SignalComponent>;
  let component: SignalComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SignalComponent]
    });

    fixture = TestBed.createComponent(SignalComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
