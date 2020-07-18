import {usersApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

const initialState = {
    posts: [
        {id: 1, likeCount: 2, message: 'Hi, how are you?'},
        {id: 2, likeCount: 10, message: 'It\'s my first post!'}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.newPostText,
                likeCount: 0
            };
            return {...state, posts: [...state.posts, newPost], newPostText: ''};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            };
        default:
            return state;
    }
};

export default profileReducer;

export const addPostActionCreater = (newPostText) => ({
    type: ADD_POST,
    newPostText
});

export const deletePostActionCreater = (postId) => ({
    type: DELETE_POST,
    postId
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
                dispatch(setStatus(status))
            }
        });
    };
};