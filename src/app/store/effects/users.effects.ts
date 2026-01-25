import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "../../service/API/api.service";
import { map, switchMap, of, catchError } from "rxjs";
import * as UsersActions from "../actions/users.actions";


@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private apiservice: ApiService
    ) { }

    loadUsers$ = createEffect(() =>
        this.actions$.pipe(

            // listen for request action
            ofType(UsersActions.loadUsers),

            // cancel previous request if triggered again
            switchMap(() =>
                this.apiservice.getUsers().pipe(

                    // API success
                    map(response =>
                        UsersActions.loadUsersSuccess({ Users: response })
                    ),

                    // API error
                    catchError(error =>
                        of(
                            UsersActions.loadUsersFailure({
                                error: error.message,
                            })
                        )
                    )
                )
            )
        )
    );
}
