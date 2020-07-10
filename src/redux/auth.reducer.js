import {authApi, usersApi} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            debugger
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => {
    debugger
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

export const getLoggin = () => {
    debugger
    return (dispatch) => {
        usersApi.loggin().then((data) => {
            debugger
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
    };
};

export const login = (email, password, rememberMe) => {
    debugger
    return (dispatch) => {
        authApi.login(email, password, rememberMe).then((data) => {
            debugger
            if (data.resultCode === 0) {
                debugger
                dispatch(getLoggin());
            }
        });
    };
};

export const logout = () => {
    return (dispatch) => {
        authApi.logout().then((data) => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
    };
};