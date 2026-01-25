import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
// Import selectors from your store location
import programsSelectors from '../../store/selectors/programs.selectors';
import { Store } from '@ngrx/store';
import * as ProgramsActions from "../../store/actions/programs.actions";
import * as UsersActions from "../../store/actions/users.actions";
import { take } from "rxjs";
import usersSelectors from "../../store/selectors/users.selector";
import { HttpClient, HttpClientModule } from "@angular/common/http";


@Component({
  selector: "app-ngrx-example",
  templateUrl: "./ngrx-example.component.html",
  styleUrls: ["./ngrx-example.component.scss"],
  standalone: true,
  imports: [RouterModule, CommonModule,HttpClientModule]
})

export class NgrxExampleComponent implements OnInit {

  public tsCode = '';
  constructor(private store: Store,private http:HttpClient) {
    console.log('programs$ ====> ', this.programs$)
    console.log('users$ ====> ', this.users$)
     this.http.get('../../../assets/txtfiles/ngrx.txt', { responseType: 'text' })
      .subscribe(code => this.tsCode = code);
  }

  // programs state
  programs$ = this.store.select(programsSelectors.selectPrograms);
  loading$ = this.store.select(programsSelectors.selectLoading);
  error$ = this.store.select(programsSelectors.selectError);

  // users state
  users$ = this.store.select(usersSelectors.selectUsers);
  userLoading$ = this.store.select(usersSelectors.selectLoading);
  usersError$ = this.store.select(usersSelectors.selectError);

  checkStateForData() {
    console.log('Check the state - data is there or not')
    this.programs$.pipe(take(1)).subscribe(data => {
      console.log('DATA', data)
      console.log('DATA LENGTH', data.length)
      if (!data.length) {
        this.fetchPrograms();
      }
    })
  }

  fetchPrograms() {
    // dispatch API call
    this.store.dispatch(ProgramsActions.loadPrograms());
  }

  ngOnInit() {
    // dispatch API call
    this.store.dispatch(UsersActions.loadUsers());
  }
}
