import { signInAction, signOutAction } from "./actions";
import { User } from "@auth0/auth0-react";

export const signIn = (user: User | undefined) => {
    return (dispatch: any) => {
        return (
            dispatch(signInAction({
                isSignedIn: true,
                icon: user?.picture,
                uid: user?.sub,
                username: user?.nickname
            }))
        )
    }
}

export const signOut = () => {
    return (dispatch: any) => {
        dispatch(signOutAction())
    }
}