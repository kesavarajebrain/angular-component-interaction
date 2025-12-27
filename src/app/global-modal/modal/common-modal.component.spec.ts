import { NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModalComponent } from "./common-modal.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("CommonModalComponent", () => {

  let fixture: ComponentFixture<CommonModalComponent>;
  let component: CommonModalComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [CommonModalComponent]
    });

    fixture = TestBed.createComponent(CommonModalComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
