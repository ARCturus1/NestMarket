import { Action } from '@ngrx/store';
import { Product } from '../../models/product.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ProductActionTypes {
    Add = '[Product] Add',
    Update = '[Product] Update'
}

export class AddProduct implements Action {
    readonly type = ProductActionTypes.Add;

    constructor(public payload: {item: Product}) { }
}

export class UpdateProduct implements Action {
    readonly type = ProductActionTypes.Update;

    constructor(public payload: {item: Product}) { }
}

export type ProductActions
    = AddProduct
    | UpdateProduct;
