import {usersApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
    posts: [
        {id: 1, likeCount: 2, message: 'Hi, how are you?'},
        {id: 2, likeCount: 10, message: 'It\'s my first post!'}
    ],
    newPostText: 'it-kabzda.com',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCount: 0
            };
            return {...state, posts: [...state.posts, newPost], newPostText: ''};
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};

export default profileReducer;

export const addPostActionCreater = () => ({
    type: ADD_POST
});

export const updatePostTextActionCreater = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});

export const setStatus = (status) => ({
    type: SET_STATUS,
    status
});

export const getProfileUser = (userId) => {
    return (dispatch) => {
        usersApi.getProfile(userId).then((data) => {
            dispatch(setUserProfile(data));
        });
    };
};

export const getStatus = (userId) => {
    return (dispatch) => {
        usersApi.getStatus(userId).then((data) => {
           dispatch(setStatus(data))
        });
    };
};

export const updateStatus = (status) => {
    return (dispatch) => {
        usersApi.updateStatus(status).then((data) => {
            if (data.resultCode === 0) {
                dispatch(setStatus(data))
            }
        });
    };
};