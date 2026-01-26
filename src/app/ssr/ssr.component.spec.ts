import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SsrComponent } from "./ssr.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SsrComponent", () => {

  let fixture: ComponentFixture<SsrComponent>;
  let component: SsrComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SsrComponent]
    });

    fixture = TestBed.createComponent(SsrComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
