import { NO_ERRORS_SCHEMA } from "@angular/core";
import { UpgradationComponent } from "./upgradation.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("UpgradationComponent", () => {

  let fixture: ComponentFixture<UpgradationComponent>;
  let component: UpgradationComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [UpgradationComponent]
    });

    fixture = TestBed.createComponent(UpgradationComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
