import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AdsenseComponent } from "./adsense.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("AdsenseComponent", () => {

  let fixture: ComponentFixture<AdsenseComponent>;
  let component: AdsenseComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [AdsenseComponent]
    });

    fixture = TestBed.createComponent(AdsenseComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
