import { NO_ERRORS_SCHEMA } from "@angular/core";
import { NgrxComponent } from "./ngrx.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("NgrxComponent", () => {

  let fixture: ComponentFixture<NgrxComponent>;
  let component: NgrxComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [NgrxComponent]
    });

    fixture = TestBed.createComponent(NgrxComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
