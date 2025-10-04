import { NO_ERRORS_SCHEMA } from "@angular/core";
import { NgaftercontentcheckedComponent } from "./ngaftercontentchecked.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("NgaftercontentcheckedComponent", () => {

  let fixture: ComponentFixture<NgaftercontentcheckedComponent>;
  let component: NgaftercontentcheckedComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [NgaftercontentcheckedComponent]
    });

    fixture = TestBed.createComponent(NgaftercontentcheckedComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
