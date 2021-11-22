import { signInAction, signOutAction } from "./actions";
import { User } from "@auth0/auth0-react";
import { push } from "connected-react-router";
import { getItems } from "../items/operations";
import { getCategories } from "../categories/operations";
import { getPaymentMethods } from "../paymentMethods/operations";

export const signIn = (user: User | undefined) => {
    return async (dispatch: any) => {
        dispatch(signInAction({
            isSignedIn: true,
            icon: user?.picture,
            uid: user?.sub,
            username: user?.nickname,
            email: user?.email
        }));
        dispatch(getItems(user?.sub))
        dispatch(getCategories(user?.sub))
        dispatch(getPaymentMethods(user?.sub))
        dispatch(push('/items'))
    }
}

export const signOut = () => {
    return async (dispatch: any) => {
        dispatch(signOutAction());
        dispatch(push('/'));
    }
}