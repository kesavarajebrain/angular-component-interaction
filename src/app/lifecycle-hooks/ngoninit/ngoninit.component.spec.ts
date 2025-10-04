import { NO_ERRORS_SCHEMA } from "@angular/core";
import { NgoninitComponent } from "./ngoninit.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("NgoninitComponent", () => {

  let fixture: ComponentFixture<NgoninitComponent>;
  let component: NgoninitComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [NgoninitComponent]
    });

    fixture = TestBed.createComponent(NgoninitComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
