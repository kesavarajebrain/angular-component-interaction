import { AfterViewInit, Component, ViewChild, ChangeDetectorRef } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HooksOrderComponent } from "../hooks-order/hooks-order.component";
// import child
import { ChildComponent } from "./child/child.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-ngafterviewinit",
  standalone: true,
  imports: [RouterModule, HooksOrderComponent, ChildComponent, HttpClientModule],
  templateUrl: "./ngafterviewinit.component.html",
  styleUrls: ["./ngafterviewinit.component.scss"]
})

export class NgafterviewinitComponent implements AfterViewInit {
  @ViewChild(ChildComponent) childComp!: ChildComponent;

  public tsCode = '';

  constructor(private cd: ChangeDetectorRef, private http: HttpClient) {
    this.http.get('../../../assets/txtfiles/ngafterviewinit.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);
  }

  ngAfterViewInit() {
    console.log('✅ Parent ngAfterViewInit called');
    console.log('Child Component is accessible here:', !!this.childComp);

    // ✅ The child is fully ready — we can change its value
    // for testing purpose added settimeout
    setTimeout(() => {
      console.log('⏳ Updating child after 3 seconds...');
      this.childComp.updateStatus('✅ Updated by Parent after 3 seconds!');
    }, 3000);

    // ⚠️ But if we change bound data, Angular may warn "ExpressionChangedAfterItHasBeenCheckedError"
    // So fix with detectChanges()
    this.cd.detectChanges();
  }

  update() {
    this.childComp.update('✅ Updated by Parent by btn click!');
  }
}
