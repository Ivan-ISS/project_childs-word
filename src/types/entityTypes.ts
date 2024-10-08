export interface IError {
    error: string;
}

export interface IMeta {
    count: number;
    total: number;
    sort: {
        field: string;
        direction: string;
        availableFields: string[];
    };
}

export interface IProduct {
    id: string;
    title: string;
    description: string;
    category: string;
    price: number;
    picture: string;
    rating: number;
}

export interface IGetProducts {
    meta: IMeta;
    data: IProduct[];
}

export interface IOrderInfo {
    product: IProduct;
    quantity: number;
    createdAt: string;
}

export interface IGetOrder {
    meta: IMeta;
    data: IOrderInfo[][];
}

export interface IGetCart extends IOrderInfo {}

export interface IUpdateCart {
    data: {
        id: string;
        quantity: number;
    }[];
}

export type TGetCategories = string[];
