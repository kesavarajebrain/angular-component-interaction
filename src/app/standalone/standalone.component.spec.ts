import { NO_ERRORS_SCHEMA } from "@angular/core";
import { StandaloneComponent } from "./standalone.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("StandaloneComponent", () => {

  let fixture: ComponentFixture<StandaloneComponent>;
  let component: StandaloneComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [StandaloneComponent]
    });

    fixture = TestBed.createComponent(StandaloneComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
