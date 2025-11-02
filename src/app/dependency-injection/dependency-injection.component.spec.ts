import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DependencyInjectionComponent } from "./dependency-injection.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("DependencyInjectionComponent", () => {

  let fixture: ComponentFixture<DependencyInjectionComponent>;
  let component: DependencyInjectionComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [DependencyInjectionComponent]
    });

    fixture = TestBed.createComponent(DependencyInjectionComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
