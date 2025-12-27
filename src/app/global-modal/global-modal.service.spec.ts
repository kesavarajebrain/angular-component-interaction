import { GlobalModalService } from "./global-modal.service";
import { TestBed } from "@angular/core/testing";

describe("GlobalModalService", () => {

  let service: GlobalModalService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GlobalModalService
      ]
    });
    service = TestBed.get(GlobalModalService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
