import { NO_ERRORS_SCHEMA } from "@angular/core";
import { MenuItemsComponent } from "./menu-items.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("MenuItemsComponent", () => {

  let fixture: ComponentFixture<MenuItemsComponent>;
  let component: MenuItemsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [MenuItemsComponent]
    });

    fixture = TestBed.createComponent(MenuItemsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
