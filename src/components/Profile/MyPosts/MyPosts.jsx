import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

window.props = [];

const MyPosts = React.memo(props => {
    console.log('Render');
    window.props.push(props);

    console.log(props);

    let newPostElement = React.createRef();

    let postsItems = props.posts
        .map((post, index) =>
            <Post
                key={`${post.message} + ${index}`}
                message={post.message}
                likeCount={post.likeCount}
            />
        );

    let onAddPost = (values) => props.addPost(values.newPostText);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsItems}
            </div>
        </div>
    );
});

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'newPostText'}
                    placeholder={'Ввведите пост'}
                    component={Textarea}
                    validate={[requiredField, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;