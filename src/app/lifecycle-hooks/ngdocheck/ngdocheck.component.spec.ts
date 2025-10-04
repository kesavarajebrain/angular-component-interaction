import { NO_ERRORS_SCHEMA } from "@angular/core";
import { NgdocheckComponent } from "./ngdocheck.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("NgdocheckComponent", () => {

  let fixture: ComponentFixture<NgdocheckComponent>;
  let component: NgdocheckComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [NgdocheckComponent]
    });

    fixture = TestBed.createComponent(NgdocheckComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
