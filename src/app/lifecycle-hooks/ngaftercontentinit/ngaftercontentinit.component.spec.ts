import { NO_ERRORS_SCHEMA } from "@angular/core";
import { NgaftercontentinitComponent } from "./ngaftercontentinit.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("NgaftercontentinitComponent", () => {

  let fixture: ComponentFixture<NgaftercontentinitComponent>;
  let component: NgaftercontentinitComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [NgaftercontentinitComponent]
    });

    fixture = TestBed.createComponent(NgaftercontentinitComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
