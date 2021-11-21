export type paymentMethodState = {
    id: number;
    name: string;
    income: boolean;
    user_id: string;
}

export type paymentMethodsState = {
    incomes?: paymentMethodState[];
    expenses?: paymentMethodState[];
    default_list?: paymentMethodState[];
    custum_list: paymentMethodState[];
}

export type paymentMethodAction = {
    type: string;
    payload: paymentMethodsState[];
}