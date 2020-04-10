let state = {
    profilePage: {
        posts: [
            {id: 1, likeCount: 2, message: 'Hi, how are you?'},
            {id: 2, likeCount: 10, message: 'It\'s my first post!'}
        ]
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

export let addPost = (postMessage) => {
    let newPost = {id: 3, message: postMessage, likeCount: 0};

    state.profilePage.posts.push(newPost);
};

export default state;