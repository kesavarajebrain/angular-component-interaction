import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ConstructorComponent } from "./constructor.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ConstructorComponent", () => {

  let fixture: ComponentFixture<ConstructorComponent>;
  let component: ConstructorComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ConstructorComponent]
    });

    fixture = TestBed.createComponent(ConstructorComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
