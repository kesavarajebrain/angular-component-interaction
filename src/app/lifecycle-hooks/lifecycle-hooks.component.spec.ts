import { NO_ERRORS_SCHEMA } from "@angular/core";
import { LifecycleHooksComponent } from "./lifecycle-hooks.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("LifecycleHooksComponent", () => {

  let fixture: ComponentFixture<LifecycleHooksComponent>;
  let component: LifecycleHooksComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [LifecycleHooksComponent]
    });

    fixture = TestBed.createComponent(LifecycleHooksComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
