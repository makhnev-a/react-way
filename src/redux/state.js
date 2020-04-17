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
            ]
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

    addPost() {
        let newPost = {id: 3, message: this._state.profilePage.newPostText, likeCount: 0};

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {id: 3, message: this._state.profilePage.newPostText, likeCount: 0};

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

window.state = store.state;

export default store;