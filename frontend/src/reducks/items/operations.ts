import axios from "axios";
import { push } from "connected-react-router";
import { Dispatch, ReducersMapObject, StateFromReducersMapObject } from "redux";
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
        await axios.get(`http://localhost:80/${user_id}/items`)
        .then(resp => {
            dispatch(setItemsAction(resp.data));
        })
    }
}

export const createItem = (user_id: string, item: itemState) => {
    return async (dispatch: Dispatch) => {
        await axios.post(`http://localhost:80/${user_id}/items`, {
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
        await axios.delete(`http://localhost:80/${user_id}/items/${item_id}`)
        .then(() => {
            const prevItems = getState().items;
            const nextItems = prevItems.filter((item: itemState) => item.id !== item_id);
            dispatch(deleteItemAction(nextItems));
            dispatch(push('/items'));
        })
        
    }
}

export const updateItem = (user_id: string, item: itemState) => {
    return async (dispatch: Dispatch, getState: () => StateFromReducersMapObject<ReducersMapObject<any, any>>) => {
        await axios.patch(`http://localhost:80/${user_id}/items/${item.id}`, {
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
            const nextItems = prevItems.filter((prevItem: itemState) => prevItem.id !== item.id)
            nextItems.push(resp.data)
            dispatch(updateItemAction(nextItems));
            dispatch(push('/items'));
        })
        .catch(e => {
            alert("必要事項を入力してください");
        });
    }
}