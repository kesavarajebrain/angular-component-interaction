import { NO_ERRORS_SCHEMA } from "@angular/core";
import { PipesComponent } from "./pipes.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("PipesComponent", () => {

  let fixture: ComponentFixture<PipesComponent>;
  let component: PipesComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [PipesComponent]
    });

    fixture = TestBed.createComponent(PipesComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
