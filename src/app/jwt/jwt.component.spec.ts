import { NO_ERRORS_SCHEMA } from "@angular/core";
import { JwtComponent } from "./jwt.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("JwtComponent", () => {

  let fixture: ComponentFixture<JwtComponent>;
  let component: JwtComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [JwtComponent]
    });

    fixture = TestBed.createComponent(JwtComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
