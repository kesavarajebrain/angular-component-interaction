import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ReactiveComponent } from "./reactive.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ReactiveComponent", () => {

  let fixture: ComponentFixture<ReactiveComponent>;
  let component: ReactiveComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ReactiveComponent]
    });

    fixture = TestBed.createComponent(ReactiveComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
