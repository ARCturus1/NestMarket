import { ProductState } from './product-store';

export interface AppState {
    readonly products: ProductState.State;
}
