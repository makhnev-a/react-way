import profileReducer, {addPostActionCreater, deletePostActionCreater} from "./profile.reducer";

const state = {
    posts: [
        {id: 1, likeCount: 2, message: 'Hi, how are you?'},
        {id: 2, likeCount: 10, message: 'It\'s my first post!'}
    ]
};

it('length of posts should be incremented', () => {
    // 1. test start data
    let action = addPostActionCreater('it-kamasutra.com');
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it('message of posts should be correct', () => {
    // 1. test start data
    let action = addPostActionCreater('it-kamasutra.com');
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[2].message).toBe('it-kamasutra.com');
});

it('after deleting length of messages should be decrement', () => {
    // 1. test start data
    let action = deletePostActionCreater(1);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(1);
});

it('after deleting length should\'t be decrement if id is incorrect', () => {
    // 1. test start data
    let action = deletePostActionCreater(1000);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(2);
});