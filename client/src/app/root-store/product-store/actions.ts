import { Action } from '@ngrx/store';
import { Product } from '../../models/product.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ProductActionTypes {
    Add = '[Product] Add',
    AddSuccess = '[Product] AddSuccess',
    Update = '[Product] Update',
    UpdateSuccess = '[Product] UpdateSuccess',
    Delete = '[Product] Delete',
    DeleteSuccess = '[Product] DeleteSuccess',
    Get = '[Product] Get',
    GetSuccess = '[Product] GetSuccess',
    ApiFail = '[Product] ApiFail'
}

export class AddProduct implements Action {
    readonly type = ProductActionTypes.Add;

    constructor(public payload: { item: Product }) { }
}

export class AddProductSuccess implements Action {
    readonly type = ProductActionTypes.AddSuccess;

    constructor(public payload: { item: Product }) { }
}

export class UpdateProduct implements Action {
    readonly type = ProductActionTypes.Update;

    constructor(public payload: { id: number, item: Product }) { }
}

export class UpdateProductSuccess implements Action {
    readonly type = ProductActionTypes.UpdateSuccess;

    constructor(public payload: { item: Product }) { }
}

export class DeleteProduct implements Action {
    readonly type = ProductActionTypes.Delete;

    constructor(public payload: { id: number }) { }
}

export class DeleteProductSuccess implements Action {
    readonly type = ProductActionTypes.DeleteSuccess;

    // constructor(public payload: { item: Product }) { }
}

export class GetProduct implements Action {
    readonly type = ProductActionTypes.Get;

    constructor(public payload: { page: number, pageSize: number }) { }
}

export class GetProductSuccess implements Action {
    readonly type = ProductActionTypes.GetSuccess;

    constructor(public payload: { data: Product[] }) { }
}


export class ApiFail implements Action {
    readonly type = ProductActionTypes.ApiFail;

    constructor(public payload: { errorMessage: string }) { }
}

export type ProductActions
    = AddProduct
    | AddProductSuccess
    | UpdateProduct
    | UpdateProductSuccess
    | GetProduct
    | GetProductSuccess
    | DeleteProduct
    | DeleteProductSuccess
    | ApiFail;

