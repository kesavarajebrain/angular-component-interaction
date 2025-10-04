import { NO_ERRORS_SCHEMA } from "@angular/core";
import { NgafterviewinitComponent } from "./ngafterviewinit.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("NgafterviewinitComponent", () => {

  let fixture: ComponentFixture<NgafterviewinitComponent>;
  let component: NgafterviewinitComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [NgafterviewinitComponent]
    });

    fixture = TestBed.createComponent(NgafterviewinitComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
