import { moneyInfoState } from "./type";

export const SET_MONEYINFO = "SET_MONEYINFO";
export const setMoneyInfoAction = (money_info: moneyInfoState) => {
    return {
        type: "SET_MONEYINFO",
        payload: money_info
    }
}

export const UPDATE_MONEYINFO = "UPDATE_MONEYINFO";
export const updateMoneyInfoAction = (money_info: moneyInfoState) => {
    return {
        type: "UPDATE_MONEYINFO",
        payload: money_info
    }
}