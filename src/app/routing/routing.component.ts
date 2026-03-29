import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { NgForm, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: "app-routing",
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: "./routing.component.html",
  styleUrls: ["./routing.component.scss"]
})

export class RoutingComponent {

  model = {
    id: '',
    category: ''
  }

  tsCode = '';

  submitted: boolean = false;

  constructor(private router: Router, private http: HttpClient) {
    this.http.get('../../../assets/txtfiles/routing.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const id = this.model.id;
      console.log('ID----> ', id)
      this.router.navigate(['/routing', id]);
      if (this.model.category) {
        this.router.navigate(['/routing', this.model.category, id]);
      }
    } else {
      console.log('Form is invalid');
      this.submitted = true;
    }
  }
}
