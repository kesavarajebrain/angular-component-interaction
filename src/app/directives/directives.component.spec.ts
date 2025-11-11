import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DirectivesComponent } from "./directives.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("DirectivesComponent", () => {

  let fixture: ComponentFixture<DirectivesComponent>;
  let component: DirectivesComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [DirectivesComponent]
    });

    fixture = TestBed.createComponent(DirectivesComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
