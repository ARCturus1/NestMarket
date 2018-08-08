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
                success: false,
                error: null
            };
        }

        case ProductActions.ProductActionTypes.AddSuccess: {
            return {
                ...state,
                isLoading: false,
                success: true,
                error: null,
                data: [...state.data, action.payload.item]
            };
        }

        default: {
            return state;
        }
    }
}
