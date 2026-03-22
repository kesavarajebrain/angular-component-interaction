import { Component, OnInit, inject } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TaskStore } from "../signal-store/task.store";
import { HttpClient } from "@angular/common/http";
import { AppTodoItemComponent } from "./app-todo-item/app-todo-item.component";

@Component({
  selector: "app-advanced-signals",
  standalone:true,
  imports: [RouterModule, AppTodoItemComponent],
  templateUrl: "./advanced-signals.component.html",
  styleUrls: ["./advanced-signals.component.scss"]
})

export class AdvancedSignalsComponent {

  tsCode = ''
  store = inject(TaskStore);
  constructor(private http: HttpClient) {}

  getTxtFile(fileName:string) {
    this.http.get('../../../assets/txtfiles/'+fileName+'.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);
  }
}
