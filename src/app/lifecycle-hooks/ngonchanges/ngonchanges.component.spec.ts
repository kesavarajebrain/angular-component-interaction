import { NO_ERRORS_SCHEMA } from "@angular/core";
import { NgonchangesComponent } from "./ngonchanges.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("NgonchangesComponent", () => {

  let fixture: ComponentFixture<NgonchangesComponent>;
  let component: NgonchangesComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [NgonchangesComponent]
    });

    fixture = TestBed.createComponent(NgonchangesComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
