import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { Product } from '../../models/product.model';

export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>({
        selectId: model => model.id,
        sortComparer: (a: Product, b: Product): number => b.id - a.id
    });

export interface State extends EntityState<Product> {
    isLoading: boolean;
    success: boolean;
    data?: Product[];
    error?: any;
}

export const initialState: State = productAdapter.getInitialState({
    isLoading: false,
    error: null,
    success: false
});
