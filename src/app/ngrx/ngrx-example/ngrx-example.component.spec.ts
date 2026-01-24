import { NO_ERRORS_SCHEMA } from "@angular/core";
import { NgrxExampleComponent } from "./ngrx-example.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("NgrxExampleComponent", () => {

  let fixture: ComponentFixture<NgrxExampleComponent>;
  let component: NgrxExampleComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [NgrxExampleComponent]
    });

    fixture = TestBed.createComponent(NgrxExampleComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
