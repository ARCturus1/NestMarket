import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import * as ProductActions from './actions';
import { Product } from './models/product.model';


export const featureAdapter: EntityAdapter<Product>
    = createEntityAdapter<Product>({
        selectId: model => model.id,
        sortComparer: (a: Product, b: Product): number => b.id - a.id
    });

export interface State extends EntityState<Product> {
    isLoading: boolean;
    error?: any;
}

const initialState: State = featureAdapter.getInitialState({
    isLoading: false,
    error: null
});

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
