import { NO_ERRORS_SCHEMA } from "@angular/core";
import { NgafterviewcheckedComponent } from "./ngafterviewchecked.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("NgafterviewcheckedComponent", () => {

  let fixture: ComponentFixture<NgafterviewcheckedComponent>;
  let component: NgafterviewcheckedComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [NgafterviewcheckedComponent]
    });

    fixture = TestBed.createComponent(NgafterviewcheckedComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
