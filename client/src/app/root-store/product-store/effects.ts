import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import * as ProductsActions from './actions';
import { ProductState } from '.';

@Injectable()
export class ProductEffects {
    @Effect() name$: Observable<Action> = this.actions$.ofType(ProductsActions.ProductActionTypes.Add).
        pipe(
            // switchMap((value: ProductState.State) => {
            //     return from()
            // })
        );

    constructor(
        private actions$: Actions
    ) { }
}
