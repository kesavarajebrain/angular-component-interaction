import { Component, inject } from "@angular/core";
import { TaskStore } from "../signal-store/task.store";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-signal-example",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./signal-example.component.html",
  styleUrls: ["./signal-example.component.scss"]
})

export class SignalExampleComponent {

  store = inject(TaskStore);

  newTask = '';
  tsCode!: string;

  constructor(private http: HttpClient) {
    this.http.get('../../../assets/txtfiles/signal-example.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);
  }

  add() {
    this.store.addTask(this.newTask);
    this.newTask = '';
  }
}
