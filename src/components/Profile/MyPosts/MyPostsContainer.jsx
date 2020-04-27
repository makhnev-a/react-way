import React from "react";
import {addPostActionCreater, updatePostTextActionCreater} from '../../../redux/profile.reducer';
import MyPosts from "./MyPosts";
import Context from '../../../StoreContext';

const MyPostsContainer = (props) => {
    return (
        <Context.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostActionCreater())
                    };

                    let onPostChange = (text) => {
                        let action = updatePostTextActionCreater(text);
                        store.dispatch(action);
                    };

                    return (
                        <MyPosts
                            updateNewPostText={onPostChange}
                            addPost={addPost}
                            posts={state.profilePage.posts}
                            newPostText={state.profilePage.newPostText}
                        />
                    );
                }
            }
        </Context.Consumer>
    );
};

export default MyPostsContainer;