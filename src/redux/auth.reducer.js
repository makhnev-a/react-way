import {authApi, usersApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'ReactWay/auth.reducer/SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    };
};

export default authReducer;

export const getLoggin = () => async (dispatch) => {
    let data = await usersApi.loggin();

    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await authApi.login(email, password, rememberMe);

    if (data.data.resultCode === 0) {
        dispatch(getLoggin());
    } else {
        let message = data.data.messages.length > 0
            ? data.data.messages[0]
            : 'Some error';
        dispatch(stopSubmit('login', {_error: message}));
    }
};

export const logout = () => async (dispatch) => {
    let data = await authApi.logout();

    if (data.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};