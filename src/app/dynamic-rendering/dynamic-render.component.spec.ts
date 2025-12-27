import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ContentProjectionComponent } from "./dynamic-render.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ContentProjectionComponent", () => {

  let fixture: ComponentFixture<ContentProjectionComponent>;
  let component: ContentProjectionComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ContentProjectionComponent]
    });

    fixture = TestBed.createComponent(ContentProjectionComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
