import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsItems = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesItems = props.state.messages.map(message => <Message message={message.message}/>);

    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {dialogsItems}
                </div>

                <div className={style.messages}>
                    {messagesItems}
                </div>
            </div>
        </div>
    );
};

export default Dialogs;