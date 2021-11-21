import axios from "axios";
import { Dispatch, ReducersMapObject, StateFromReducersMapObject } from "redux";
import { createPaymentMethodAction, setPaymentMethodsAction } from "./actions";
import { paymentMethodState } from "./type";


export const getCategories = (user_id: string | undefined) => {
    return async (dispatch: Dispatch) => {
        await axios.get(`http://localhost:80/${user_id}/payment_methods`)
        .then(resp => {
            const default_list = resp.data.filter((payment_method: paymentMethodState) => !payment_method.user_id);
            const custum_list = resp.data.filter((payment_method: paymentMethodState) => payment_method.user_id);
            const incomes = resp.data.filter((payment_method: paymentMethodState) => payment_method.income);
            const expenses = resp.data.filter((payment_method: paymentMethodState) => !payment_method.income);
            dispatch(setPaymentMethodsAction({
                incomes: incomes,
                expenses: expenses,
                default_list: default_list,
                custum_list: custum_list
            }))
        })
    }
}

export const createPaymentMethod = (user_id: string, payment_method: paymentMethodState) => {
    return async (dispatch: Dispatch, getState: () => StateFromReducersMapObject<ReducersMapObject<any, any>>) => {
        await axios.post(`http://localhost:80/${user_id}/payment_methods`, {
            payment_method: {
                name: payment_method.name,
                income: payment_method.income,
                user_id: user_id
            }
        })
        .then(resp => {
            const custum_list = getState().payment_methods.custum_list.push(resp.data)
            if (resp.data.income) {
                const incomes = getState().payment_methods.incomes.push(resp.data)
                dispatch(createPaymentMethodAction({
                    custum_list: custum_list,
                    incomes: incomes,
                }))
            } else {
                const expenses = getState().payment_methods.expenses.push(resp.data)
                dispatch(createPaymentMethodAction({
                    custum_list: custum_list,
                    expenses: expenses,
                }))
            }
        })
    }
}

export const deletePaymentMethod = (user_id: string, payment_method_id: number, income: boolean) => {
    return async (dispatch: Dispatch, getState: () => StateFromReducersMapObject<ReducersMapObject<any, any>>) => {
        await axios.delete(`http://localhost:80/${user_id}/payment_methods/${payment_method_id}`)
        .then(() => {
            const custum_list = getState().categories.custum_list.filter((payment_method: paymentMethodState) => payment_method.id !== payment_method_id)
            if (income) {
                const incomes = getState().payment_methods.incomes.filter((payment_method: paymentMethodState) => payment_method.id !== payment_method_id)
                dispatch(createPaymentMethodAction({
                    custum_list: custum_list,
                    incomes: incomes,
                }))
            } else {
                const expenses = getState().payment_methods.expenses.filter((payment_method: paymentMethodState) => payment_method.id !== payment_method_id)
                dispatch(createPaymentMethodAction({
                    custum_list: custum_list,
                    expenses: expenses,
                }))
            }
        })
    }
}

export const updatePaymentMethod = (user_id: string, payment_method: paymentMethodState) => {
    return async (dispatch: Dispatch, getState: () => StateFromReducersMapObject<ReducersMapObject<any, any>>) => {
        await axios.patch(`http://localhost:80/${user_id}/payment_methods/${payment_method.id}`, {
            payment_method: {
                name: payment_method.name,
                income: payment_method.income,
                user_id: user_id
            }
        })
        .then(resp => {
            const custum_list = getState().categories.custum_list.filter((payment_method: paymentMethodState) => payment_method.id !== resp.data.id).push(resp.data)
            if (resp.data.income) {
                const incomes = getState().payment_methods.incomes.filter((payment_method: paymentMethodState) => payment_method.id !== resp.data.id).push(resp.data)
                dispatch(createPaymentMethodAction({
                    custum_list: custum_list,
                    incomes: incomes,
                }))
            } else {
                const expenses = getState().payment_methods.expenses.filter((payment_method: paymentMethodState) => payment_method.id !== resp.data.id).push(resp.data)
                dispatch(createPaymentMethodAction({
                    custum_list: custum_list,
                    expenses: expenses,
                }))
            }
        })
    }
}