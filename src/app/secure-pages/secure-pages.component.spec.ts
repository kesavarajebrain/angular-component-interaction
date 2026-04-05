import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SecurePagesComponent } from "./secure-pages.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SecurePagesComponent", () => {

  let fixture: ComponentFixture<SecurePagesComponent>;
  let component: SecurePagesComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SecurePagesComponent]
    });

    fixture = TestBed.createComponent(SecurePagesComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
