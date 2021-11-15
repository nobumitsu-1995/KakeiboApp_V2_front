export const initialState = {
    users: {
        isSignedIn: false,
        icon: "",
        uid: "",
        username: ""
    }
}

export const initialMoneyInfoState = {
    total_assets: 0,
    target_amount: 0,
    deadline: ""
}

export const initialCategoryState = {
    id: 0,
    name: "",
    user_id: 0,
    big_category: "fixed_cost",
    created_at: "",
    update_at: ""
}

export const initialPaymentMethodState = {
    id: 0,
    name: "",
    income: false,
    user_id: 0,
    created_at: "",
    update_at: ""
}