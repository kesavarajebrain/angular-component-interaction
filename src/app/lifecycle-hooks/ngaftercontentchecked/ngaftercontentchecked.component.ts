import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HooksOrderComponent } from "../hooks-order/hooks-order.component";
// import child
import { ChildComponent } from "./child/child.component";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-ngaftercontentchecked",
  standalone: true,
  imports: [RouterModule, HooksOrderComponent, ChildComponent],
  templateUrl: "./ngaftercontentchecked.component.html",
  styleUrls: ["./ngaftercontentchecked.component.scss"]
})

export class NgaftercontentcheckedComponent {

  public tsCode = '';

  alertData = {
    msg: 'Welcome! All systems normal ✅',
    type: 'info'
  }


  constructor(private http: HttpClient) {
    this.http.get('../../../assets/txtfiles/ngaftercontentchecked.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);
  }

  changeMessage(type: string) {
    console.log(type)
    switch (type) {
      case 'info':
        this.alertData = { msg: 'ℹ️ Information: Server running smoothly!', type };
        break;
      case 'warning':
        this.alertData = { msg: '⚠️ Warning: Memory usage high!!', type };
        break;
      case 'success':
        this.alertData = { msg: '✅ Success : Good Condition!', type };
        break;
      case 'error':
        this.alertData = { msg: '❌ Failed : Server Down!', type };
        break;
      default:
        this.alertData = { msg: '💡 Use back up memory !', type: 'secondary' };
        break;
    }
    console.log(this.alertData)
  }
}
