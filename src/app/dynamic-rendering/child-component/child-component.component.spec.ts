import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ChildComponentComponent } from "./child-component.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ChildComponentComponent", () => {

  let fixture: ComponentFixture<ChildComponentComponent>;
  let component: ChildComponentComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ChildComponentComponent]
    });

    fixture = TestBed.createComponent(ChildComponentComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
