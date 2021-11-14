export type itemState = {
    id: string;
    date: string;
    category: {big_category: string, name: string};
    payment_method: {name: string}
    name: string;
    price: number;
    note: string;
};