import { NO_ERRORS_SCHEMA } from "@angular/core";
import { RoutingIdComponent } from "./routing-id.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("RoutingIdComponent", () => {

  let fixture: ComponentFixture<RoutingIdComponent>;
  let component: RoutingIdComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [RoutingIdComponent]
    });

    fixture = TestBed.createComponent(RoutingIdComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
