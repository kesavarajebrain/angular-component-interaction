import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AppTodoItemComponent } from "./app-todo-item.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("AppTodoItemComponent", () => {

  let fixture: ComponentFixture<AppTodoItemComponent>;
  let component: AppTodoItemComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [AppTodoItemComponent]
    });

    fixture = TestBed.createComponent(AppTodoItemComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
