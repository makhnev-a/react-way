import profileReducer from "./profile.reducer";
import dialogsReducer from "./dialogs.reducer";
import sidebarReducer from "./sidebar.reducer";

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
        },
        sidebar: {}
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.profilePage, action);

        this._callSubscriber(this._state);
    }
};

window.state = store.state;

export default store;