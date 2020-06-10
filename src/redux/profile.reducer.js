import {usersApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    posts: [
        {id: 1, likeCount: 2, message: 'Hi, how are you?'},
        {id: 2, likeCount: 10, message: 'It\'s my first post!'}
    ],
    newPostText: 'it-kabzda.com',
    profile: null
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
            return {...state, profile: action.profile}
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

export const getProfileUser = (userId) => {
    return (dispatch) => {
        usersApi.getProfile(userId).then((data) => {
            dispatch(setUserProfile(data));
        });
    };
};