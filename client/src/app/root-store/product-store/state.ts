import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { Product } from '../../models/product.model';

export const featureAdapter: EntityAdapter<Product> = createEntityAdapter<Product>({
        selectId: model => model.id,
        sortComparer: (a: Product, b: Product): number => b.id - a.id
    });

export interface State extends EntityState<Product> {
    isLoading: boolean;
    error?: any;
}

export const initialState: State = featureAdapter.getInitialState({
    isLoading: false,
    error: null
});
