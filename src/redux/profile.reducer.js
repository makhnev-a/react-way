import {usersApi} from "../api/api";

const ADD_POST = 'ReactWay/profile.reducer/ADD-POST';
const SET_USER_PROFILE = 'ReactWay/profile.reducer/SET_USER_PROFILE';
const SET_STATUS = 'ReactWay/profile.reducer/SET_STATUS';
const DELETE_POST = 'ReactWay/profile.reducer/DELETE_POST';

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

// Actions
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

// Thunks
export const getProfileUser = (userId) => async (dispatch) => {
    let data = await usersApi.getProfile(userId);
    dispatch(setUserProfile(data));
};

export const getStatus = (userId) => async (dispatch) => {
    let data = await usersApi.getStatus(userId);
    dispatch(setStatus(data));
};

export const updateStatus = (status) => async (dispatch) => {
    let data = await usersApi.updateStatus(status)

    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
};