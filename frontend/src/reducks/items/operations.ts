import client from "../axios";
import { push } from "connected-react-router";
import { Dispatch, ReducersMapObject, StateFromReducersMapObject } from "redux";
import { calculateTotalAssets } from "../moneyInfos/operations";
import { createItemAction, deleteItemAction, setItemsAction, updateItemAction } from "./actions";
import { itemState } from "./type";

export const translateBigCategory = (bigCategory: string) => {
    switch (bigCategory) {
        case "fixed_cost":
            return "固定費";
        case "variable_cost":
            return "変動費";
        case "income":
            return "収入";
    }
}

export const itemsfilter = (items: itemState[], currentMonth: string) => {
    const date = new Date(currentMonth);
    const result = items.filter(item => new Date(item.date).getMonth() === date.getMonth());
    return result;
}

export const getItems = (user_id?: string) => {
    return async (dispatch: Dispatch) => {
        await client.get(`/${user_id}/items`)
        .then(resp => {
            dispatch(setItemsAction(resp.data));
        })
    }
}

export const createItem = (user_id: string, item: itemState) => {
    return async (dispatch: any) => {
        await client.post(`/${user_id}/items`, {
            item: {
                date: item.date,
                category_id: item.category_id,
                name: item.name,
                price: item.price,
                payment_method_id: item.payment_method_id,
                note: item.note,
                user_id: user_id
            }
        })
        .then(resp => {
            const price = resp.data.category.big_category !== "income" ? -resp.data.price : resp.data.price 
            dispatch(calculateTotalAssets(user_id, price))
            dispatch(createItemAction([resp.data]));
            dispatch(push('/items'));
        })
        .catch(e => {
            alert("必要事項を入力してください");
        });
    }
}

export const deleteItem = (user_id: string, item_id: number) => {
    return async (dispatch: Dispatch, getState: () => StateFromReducersMapObject<ReducersMapObject<any, any>>) => {
        await client.delete(`/${user_id}/items/${item_id}`)
        .then(() => {
            const prevItems = getState().items;
            const nextItems = prevItems.filter((item: itemState) => item.id !== item_id);
            dispatch(deleteItemAction(nextItems));
            dispatch(push('/items'));
        })
        
    }
}

export const updateItem = (user_id: string, item: itemState) => {
    return async (dispatch: any, getState: () => StateFromReducersMapObject<ReducersMapObject<any, any>>) => {
        await client.patch(`/${user_id}/items/${item.id}`, {
            item: {
                date: item.date,
                category_id: item.category_id,
                name: item.name,
                price: item.price,
                payment_method_id: item.payment_method_id,
                note: item.note,
                user_id: user_id
            }
        })
        .then(resp => {
            const prevItems = getState().items
            const prevItemPrice = prevItems.find((prevItem: itemState) => prevItem.id === item.id).price
            const nextItems = prevItems.filter((prevItem: itemState) => prevItem.id !== item.id)
            nextItems.push(resp.data)
            if (resp.data.price !== prevItemPrice) {
                const price = resp.data.category.big_category !== "income" ? -(resp.data.price - prevItemPrice) : resp.data.price - prevItemPrice
                dispatch(calculateTotalAssets(user_id, price))
            }
            dispatch(updateItemAction(nextItems));
            dispatch(push('/items'));
        })
        .catch(e => {
            alert("必要事項を入力してください");
        });
    }
}