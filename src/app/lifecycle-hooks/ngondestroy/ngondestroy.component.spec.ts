import { NO_ERRORS_SCHEMA } from "@angular/core";
import { NgondestroyComponent } from "./ngondestroy.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("NgondestroyComponent", () => {

  let fixture: ComponentFixture<NgondestroyComponent>;
  let component: NgondestroyComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [NgondestroyComponent]
    });

    fixture = TestBed.createComponent(NgondestroyComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
