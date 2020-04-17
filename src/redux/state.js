const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
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
            ],
            newMessageText: ''
        }
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log('state is changed');
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageText = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageText;

            this._state.dialogsPage.newMessageText = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreater = () => ({type: ADD_POST});

export const updatePostTextActionCreater = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export const sendMessageCreater = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreater = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text
});

window.state = store.state;

export default store;