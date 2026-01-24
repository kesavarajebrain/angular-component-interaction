import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
// Import selectors from your store location
import programsSelectors from '../../store/selectors/programs.selectors';
import { Store } from '@ngrx/store';
import * as ProgramsActions from "../../store/actions/programs.actions";


@Component({
  selector: "app-ngrx-example",
  templateUrl: "./ngrx-example.component.html",
  styleUrls: ["./ngrx-example.component.scss"],
  standalone: true,
  imports: [RouterModule, CommonModule]
})

export class NgrxExampleComponent {


  constructor(private store: Store) {
      console.log('programs$ ====> ',this.programs$)
  }

  programs$ = this.store.select(programsSelectors.selectPrograms);
  loading$ = this.store.select(programsSelectors.selectLoading);
  error$ = this.store.select(programsSelectors.selectError);

  fetchPrograms() {
    // dispatch API call
    this.store.dispatch(ProgramsActions.loadPrograms());
  }
}
