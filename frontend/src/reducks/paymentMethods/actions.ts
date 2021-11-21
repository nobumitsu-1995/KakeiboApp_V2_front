import { paymentMethodsState } from "./type";


export const SET_PAYMENTMETHODS = "SET_PAYMENTMETHODS";
export const setPaymentMethodsAction = (paymentMethods: paymentMethodsState) => {
    return {
        type: "SET_PAYMENTMETHODS",
        payload: paymentMethods
    }
}

export const UPDATE_PAYMENTMETHOD = "UPDATE_PAYMENTMETHOD";
export const updatePaymentMethodAction = (paymentMethods: paymentMethodsState) => {
    return {
        type: "UPDATE_PAYMENTMETHOD",
        payload: paymentMethods
    }
}

export const DELETE_PAYMENTMETHOD = "DELETE_PAYMENTMETHOD";
export const deletePaymentMethodAction = (paymentMethods: paymentMethodsState) => {
    return {
        type: "DELETE_PAYMENTMETHOD",
        payload: paymentMethods
    }
}

export const CREATE_PAYMENTMETHOD = "CREATE_PAYMENTMETHOD";
export const createPaymentMethodAction = (paymentMethods: paymentMethodsState) => {
    return {
        type: "CREATE_PAYMENTMETHOD",
        payload: paymentMethods
    }
}