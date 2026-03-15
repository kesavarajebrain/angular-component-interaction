import { DependencyInjectionService } from "./dependency-injection.service";
import { TestBed } from "@angular/core/testing";

describe("DependencyInjectionService", () => {

  let service: DependencyInjectionService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DependencyInjectionService
      ]
    });
    service = TestBed.inject(DependencyInjectionService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
