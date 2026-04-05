import { NO_ERRORS_SCHEMA } from "@angular/core";
import { RountingControlsComponent } from "./rounting-controls.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("RountingControlsComponent", () => {

  let fixture: ComponentFixture<RountingControlsComponent>;
  let component: RountingControlsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [RountingControlsComponent]
    });

    fixture = TestBed.createComponent(RountingControlsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
