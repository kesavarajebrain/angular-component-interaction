import { NO_ERRORS_SCHEMA } from "@angular/core";
import { GoToTopComponent } from "./go-to-top.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("GoToTopComponent", () => {

  let fixture: ComponentFixture<GoToTopComponent>;
  let component: GoToTopComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [GoToTopComponent]
    });

    fixture = TestBed.createComponent(GoToTopComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
