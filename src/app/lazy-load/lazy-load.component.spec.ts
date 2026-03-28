import { NO_ERRORS_SCHEMA } from "@angular/core";
import { LazyLoadComponent } from "./lazy-load.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("LazyLoadComponent", () => {

  let fixture: ComponentFixture<LazyLoadComponent>;
  let component: LazyLoadComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [LazyLoadComponent]
    });

    fixture = TestBed.createComponent(LazyLoadComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
