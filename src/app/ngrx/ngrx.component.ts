import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Store } from "@ngrx/store";
import programsSelectors from "../store/selectors/programs.selectors";
import * as ProgramsActions from "../store/actions/programs.actions";

@Component({
  selector: "app-ngrx",
  templateUrl: "./ngrx.component.html",
  styleUrls: ["./ngrx.component.scss"],
  standalone: true,
  imports: [RouterModule]
})

export class NgrxComponent {

  programs$ = this.store.select(programsSelectors.selectPrograms);
  loading$ = this.store.select(programsSelectors.selectLoading);
  error$ = this.store.select(programsSelectors.selectError);


  constructor(private store: Store) {

  }

    ngOnInit() {
    // dispatch API call
    this.store.dispatch(ProgramsActions.loadPrograms());
  }
}
