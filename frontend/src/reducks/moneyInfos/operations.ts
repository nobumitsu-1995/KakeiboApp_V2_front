import axios from "axios"
import { Dispatch } from "redux"
import { setMoneyInfoAction, updateMoneyInfoAction } from "./actions"
import { moneyInfoState } from "./type"


export const getMoneyInfo = (user_id: string) => {
    return async (dispatch: Dispatch) => {
        await axios.get(`http://localhost:80/${user_id}/money_info`)
        .then(resp => {
            dispatch(setMoneyInfoAction({
                id: resp.data.id,
                total_assets: resp.data.total_assets,
                target_amount: resp.data.target_amount,
                deadline: resp.data.deadline,
                user_id: user_id,
            }))
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
            ))
        })
    }

}