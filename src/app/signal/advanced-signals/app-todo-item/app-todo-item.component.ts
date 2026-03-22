import { Component, input, output } from "@angular/core";
import { Task, Todos } from "../../signal-store/task.store";

@Component({
  selector: "app-app-todo-item",
  standalone: true,
  templateUrl: "./app-todo-item.component.html",
  styleUrls: ["./app-todo-item.component.scss"]
})

export class AppTodoItemComponent {
  // 🔥 Signal Input
  todo = input<Todos>();
  task = input<Task>();

  // 🔥 Signal Output
  deleteTask = output<number>();

  onDelete(name: string) {
    if (name == 'task') {
      this.deleteTask.emit(this.task()?.id!);
    } else {
      this.deleteTask.emit(this.todo()?.id!);
    }
  }

}
