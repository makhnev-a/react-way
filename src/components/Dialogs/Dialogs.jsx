import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const Dialogs = (props) => {
    debugger
    let state = props.dialogsPage;
    let dialogsItems = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesItems = state.messages.map(message => <Message message={message.message}/>);
    let newMessageBody = state.newMessageText;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    if (!props.isAuth) {
        debugger
        return <Redirect to={"/login"}/>
    }

    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {dialogsItems}
                </div>

                <div className={style.messages}>
                    <div>{messagesItems}</div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
};

const maxLength10 = maxLengthCreator(10);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                validate={[requiredField, maxLength10]}
                name={'newMessageBody'}
                placeholder={'Enter you message'}
            />
            <br/>
            <button>Add message</button>
        </form>
    );
};

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;