import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AngularWorksComponent } from "./angular-works.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("AngularWorksComponent", () => {

  let fixture: ComponentFixture<AngularWorksComponent>;
  let component: AngularWorksComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [AngularWorksComponent]
    });

    fixture = TestBed.createComponent(AngularWorksComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
