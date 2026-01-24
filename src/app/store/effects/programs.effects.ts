import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "../../service/API/api.service";
import { map, switchMap, of, catchError } from "rxjs";
import * as ProgramsActions from "../actions/programs.actions";


@Injectable()
export class ProgramsEffects {
    constructor(
        private actions$: Actions,
        private apiservice: ApiService
    ) { }

    loadPrograms$ = createEffect(() =>
        this.actions$.pipe(

            // listen for request action
            ofType(ProgramsActions.loadPrograms),

            // cancel previous request if triggered again
            switchMap(() =>
                this.apiservice.getPrograms().pipe(

                    // API success
                    map(response =>
                        ProgramsActions.loadProgramsSuccess({ programs:response.result })
                    ),

                    // API error
                    catchError(error =>
                        of(
                            ProgramsActions.loadProgramsFailure({
                                error: error.message,
                            })
                        )
                    )
                )
            )
        )
    );
}
