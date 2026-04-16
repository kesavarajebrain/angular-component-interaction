import { NO_ERRORS_SCHEMA } from "@angular/core";
import { CompilationComponent } from "./compilation.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("CompilationComponent", () => {

  let fixture: ComponentFixture<CompilationComponent>;
  let component: CompilationComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [CompilationComponent]
    });

    fixture = TestBed.createComponent(CompilationComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
