import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ChangeDetectionComponent } from "./change-detection.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ChangeDetectionComponent", () => {

  let fixture: ComponentFixture<ChangeDetectionComponent>;
  let component: ChangeDetectionComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ChangeDetectionComponent]
    });

    fixture = TestBed.createComponent(ChangeDetectionComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
