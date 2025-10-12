import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SubComponentComponent } from "./sub-component.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SubComponentComponent", () => {

  let fixture: ComponentFixture<SubComponentComponent>;
  let component: SubComponentComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SubComponentComponent]
    });

    fixture = TestBed.createComponent(SubComponentComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
