import {createStore as reduxCreateStore, applyMiddleware, combineReducers } from "redux";
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import * as H from 'history';

export default function createStore(history: H.History) {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
        }),
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    );
}