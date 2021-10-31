export type userState = {
    isSignedIn: boolean
    icon?: string
    uid?: string
    username?: string
};

export type userAction = {
    type: string
    payload: userState
}