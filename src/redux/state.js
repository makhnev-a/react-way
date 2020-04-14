import {rerenderEntireTree} from '../render'

let state = {
    profilePage: {
        posts: [
            {id: 1, likeCount: 2, message: 'Hi, how are you?'},
            {id: 2, likeCount: 10, message: 'It\'s my first post!'}
        ],
        newPostText: 'it-kabzda.com'
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ]
    }
};

export let addPost = () => {
    let newPost = {id: 3, message: state.profilePage.newPostText, likeCount: 0};

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;