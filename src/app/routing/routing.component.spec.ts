import { NO_ERRORS_SCHEMA } from "@angular/core";
import { RoutingComponent } from "./routing.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("RoutingComponent", () => {

  let fixture: ComponentFixture<RoutingComponent>;
  let component: RoutingComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [RoutingComponent]
    });

    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
