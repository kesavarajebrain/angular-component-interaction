import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ChildComponent } from "./child.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ChildComponent", () => {

  let fixture: ComponentFixture<ChildComponent>;
  let component: ChildComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ChildComponent]
    });

    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
