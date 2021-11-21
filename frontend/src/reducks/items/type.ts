export type itemState = {
    id: number;
    date: string;
    category_id : number;
    category: {big_category: string, name: string};
    payment_method_id: number;
    payment_method: {name: string};
    name: string;
    price: number;
    note: string;
    user_id: string;
};

export type itemAction = {
    type: string;
    payload: itemState[];
}