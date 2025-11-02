import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClient , HttpClientModule} from "@angular/common/http";

// root level service
import { SharedService } from "../service/shared-service.service";

// local level service
import { DependencyInjectionService } from "./dependency-injection.service";

@Component({
  selector: "app-dependency-injection",
  templateUrl: "./dependency-injection.component.html",
  imports: [RouterModule,HttpClientModule],
  standalone: true,
  providers: [DependencyInjectionService], // if not add inside the provider IT WILL THOROW NullInjectorError: No provider for _DependencyInjectionService!
  styleUrls: ["./dependency-injection.component.scss"]
})

export class DependencyInjectionComponent implements OnInit {
  public tsCode = '';

  constructor(private http: HttpClient, private SharedService: SharedService, private dependencyService: DependencyInjectionService) {
    this.http.get('../../../assets/txtfiles/di.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);
  }

  ngOnInit() {
    console.log(this.SharedService.currentData)
    console.log(this.dependencyService.getMsg())
  }
}
