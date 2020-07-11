import {authApi, usersApi} from "../api/api";
import {stopSubmit} from "redux-form";
import {getLoggin} from "./auth.reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
};

export default appReducer;

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getLoggin());

    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    });
};
//
// export const login = (email, password, rememberMe) => {
//     return (dispatch) => {
//         authApi.login(email, password, rememberMe).then((data) => {
//             if (data.data.resultCode === 0) {
//                 dispatch(getLoggin());
//             } else {
//                 let message = data.data.messages.length > 0 ? data.data.messages[0] : 'Some error';
//                 dispatch(stopSubmit('login', {_error: message}));
//             }
//         });
//     };
// };
//
// export const logout = () => {
//     return (dispatch) => {
//         authApi.logout().then((data) => {
//             if (data.data.resultCode === 0) {
//                 dispatch(setAuthUserData(null, null, null, false));
//             }
//         });
//     };
// };