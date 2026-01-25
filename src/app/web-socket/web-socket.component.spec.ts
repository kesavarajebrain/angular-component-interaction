import { NO_ERRORS_SCHEMA } from "@angular/core";
import { WebSocketComponent } from "./web-socket.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("WebSocketComponent", () => {

  let fixture: ComponentFixture<WebSocketComponent>;
  let component: WebSocketComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [WebSocketComponent]
    });

    fixture = TestBed.createComponent(WebSocketComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
