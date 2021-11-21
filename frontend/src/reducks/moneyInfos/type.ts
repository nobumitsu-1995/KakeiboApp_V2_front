export type moneyInfoState = {
    id: number;
    total_assets: number;
    target_amount: number;
    deadline: string;
    user_id: string;
}

export type MoneyInfoAction = {
    type: string;
    payload: moneyInfoState[];
}