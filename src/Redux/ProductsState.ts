
// Handing Products AppState

import ProductModel from "../Models/ProductModel";

// 1. Product AppState - המידע ברמת האפליקציה הקשור למוצרים - אלו בעצם כל המוצרים:
export class ProductsState {
    public products: ProductModel[] = []; //We're going to create initial object
}

// -------------------------------------------------------------------------------------------

// 2. Product Action Types - אלו פעולות שניתן לבצע על המידע ברמת האפליקציה:
export enum ProductsActionType {

    // AddProduct,
    // UpdateProduct,
    // DeleteProduct

    ProductDownloaded = "ProductDownloaded",
    ProductAdded = "ProductAdded",
    ProductUpdated = "ProductUpdated",
    ProductDeleted = "ProductDeleted"
}

// -------------------------------------------------------------------------------------------

// 3. Product Action -  אובייקט המכיל את המידע הדרוש עבור ביצוע הפעולה שאנו מבצעים על המידע ברמת האפליקציה:
export interface ProductAction {
    type: ProductsActionType;
    payload?: any; //payload?: any; if the payload can be empty.
}

// -------------------------------------------------------------------------------------------

// 4. Product Action Creators - פונקציות המקבלות את ה"פיילאוד" ומחזירות אובייקט "אקטשיון" מתאים עבור כל פעולה
export function productsDownloadedAction(products: ProductModel[]): ProductAction {
    return { type: ProductsActionType.ProductDownloaded, payload: products };
}

export function ProductAddedAction(product: ProductModel): ProductAction {
    return { type: ProductsActionType.ProductAdded, payload: product };
}

export function ProductUpdatedAction(product: ProductModel): ProductAction {
    return { type: ProductsActionType.ProductUpdated, payload: product };
}

export function ProductDeletedAction(id: number): ProductAction {
    return { type: ProductsActionType.ProductDeleted, payload: id };
}

// -------------------------------------------------------------------------------------------

// 5. Products Reducer - פונקציה המבצעת את הפעולה בפועל:
export function productsReducer(currentState: ProductsState = new ProductsState(), action: ProductAction): ProductsState {

    // const newState = new ProductsState();
    // newState.products = currentState.products;

    let newState = { ...currentState }; // Spread Operator -שכפול אובייקטק
    let index;

    switch (action.type) {
        case ProductsActionType.ProductDownloaded:
            newState.products = action.payload; //Here payload is all products!
            break;
        case ProductsActionType.ProductAdded:
            newState.products.push(action.payload); //Here payload is the added product!
            break;
        case ProductsActionType.ProductDeleted:
            index = newState.products.findIndex(element => element.id === action.payload.id);
            newState.products.splice(index, 1);
            break;
        case ProductsActionType.ProductUpdated:
            index = newState.products.findIndex(element => element.id === action.payload.id);
            newState.products[index] = action.payload;
            break;
    }

    // 6. Products Store -> go to Redux/Store.

    return newState;
}

// -------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------


