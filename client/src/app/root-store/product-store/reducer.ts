import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import * as ProductActions from './actions';
import { Product } from '../../models/product.model';
import { initialState, State } from './state';


export function reducer(state = initialState, action: ProductActions.ProductActions): State {
    switch (action.type) {
        case ProductActions.ProductActionTypes.Add: {
            return {
                ...state,
                isLoading: true,
                error: null
            };
        }

        default: {
            return state;
        }
    }
}
