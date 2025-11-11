import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { of } from "rxjs";
import { HttpClient, HttpClientModule } from "@angular/common/http";

// custom search pipe - pure pipe
import { SearchPipe } from "./custom-pipe/search.pipe";
import { TruncatePipe } from "./custom-pipe/truncate.pipe";

// impure pipe
import { ClockPipe } from "./impure-pipe/impure-clock.pipe"
import { TimeAgoPipe } from "./impure-pipe/time-ago.pipe";

@Component({
  selector: "app-pipes",
  standalone: true,
  templateUrl: "./pipes.component.html",
  imports: [RouterModule, CommonModule, HttpClientModule, FormsModule, SearchPipe, TruncatePipe, ClockPipe, TimeAgoPipe],
  styleUrls: ["./pipes.component.scss"]
})

export class PipesComponent {
  public tsCode = '';
  // String Pipe
  name = "kesava raj";
  message = "HELLO ANGULAR DEV!";
  sentence = "angular built in pipes";
  // Date Pipe
  today = new Date();
  // Currency Pipe
  price = 1500;
  // percentage Pipe
  score = 0.8549;
  // Decimal Pipe
  amount = 1234.5;
  // Json Pipe
  user = {
    name: "Kesava",
    age: 29,
    role: "Frontend Developer"
  };
  // Slice Pipe
  items = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
  // Async Pipe
  data$ = of("Hello from Observable!");

  // Custom Search Filter Pipe
  searchText = "";
  users = [
    { id: 1, name: 'Kesava', role: 'Frontend Developer' },
    { id: 2, name: 'Mukesh', role: 'Backend Developer' },
    { id: 3, name: 'Dinesh', role: 'Full Stack Developer' },
    { id: 4, name: 'Arun', role: 'UI/UX Designer' },
    { id: 5, name: 'Ravi', role: 'DevOps Engineer' },
    { id: 6, name: 'Sita', role: 'Project Manager' },
    { id: 7, name: 'Geeta', role: 'QA Engineer' }
  ];
  // Custom Truncate Pipe
  longText = "This is a long text that needs to be truncated for better display.";

  // impure pipe
  posts = [
    { id: 1, user: 'Kesava', createdAt: new Date(Date.now() - 2 * 60 * 1000) },  // 2 min ago
    { id: 2, user: 'Arun', createdAt: new Date(Date.now() - 20 * 60 * 1000) },  // 20 min ago
    { id: 3, user: 'Dinesh', createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000) }, // 2 hrs ago
    { id: 4, user: 'Mukesh', createdAt: new Date(Date.now() - 25 * 60 * 60 * 1000) } // 1 day ago
  ];
  constructor(private http: HttpClient) {
    this.http.get('../../../assets/txtfiles/pipes.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);
    //
    console.log("Pipes Component Loaded");
    console.log(this.data$);
    // since data$ is an observable, we can subscribe to it to get the data inside the component
    this.data$.subscribe((data) => {
      console.log(data);
    });
    setTimeout(() => {
      this.data$ = of("Data updated after 3 seconds!");
      console.log("Data Observable updated");
    }, 3000);
  }
}
