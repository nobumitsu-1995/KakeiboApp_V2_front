import { signInAction, signOutAction } from "./actions";
import { User } from "@auth0/auth0-react";
import { push } from "connected-react-router";

export const signIn = (user: User | undefined) => {
    return async (dispatch: any) => {
        dispatch(signInAction({
            isSignedIn: true,
            icon: user?.picture,
            uid: user?.sub,
            username: user?.nickname,
            email: user?.email
        }));
        dispatch(push('/items'))
    }
}

export const signOut = () => {
    return async (dispatch: any) => {
        dispatch(signOutAction());
        dispatch(push('/'));
    }
}