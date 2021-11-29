import axios from "axios"
import { push } from "connected-react-router"
import { Dispatch } from "redux"
import { createMoneyInfoAction, setMoneyInfoAction, updateMoneyInfoAction } from "./actions"
import { moneyInfoState } from "./type"


export const getMoneyInfo = (user_id?: string) => {
    return async (dispatch: any) => {
        await axios.get(`http://localhost:80/${user_id}/money_info`)
        .then(resp => {
            dispatch(setMoneyInfoAction(
                resp.data
            ))
        })
        .catch(e => {
            dispatch(createMoneyInfo(user_id))
        })
    }
}

export const updateMoneyInfo = (user_id: string, money_info: moneyInfoState) => {
    return async (dispatch: Dispatch) => {
        await axios.patch(`http://localhost:80/${user_id}/money_info`, {
            money_info: {
                total_assets: money_info.total_assets,
                target_amount: money_info.target_amount,
                deadline: money_info.deadline
            }    
        })
        .then(resp => {
            dispatch(updateMoneyInfoAction(
                resp.data
            ));
            dispatch(push('/user'));
        })
    }
}

export const createMoneyInfo = (user_id?: string) => {
    return async (dispatch: Dispatch) => {
        const deadline = new Date();
        await axios.post(`http://localhost:80/${user_id}/money_info`, {
            money_info: {
                total_assets: 100000,
                target_amount: 1000000,
                deadline: deadline,
                user_id: user_id
            }   
        })
        .then(resp => {
            dispatch(createMoneyInfoAction(
                resp.data
            ));
        })
    }
}