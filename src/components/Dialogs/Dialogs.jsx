import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {updateNewMessageBodyCreater, sendMessageCreater} from '../../redux/state';

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
    let dialogsItems = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesItems = state.messages.map(message => <Message message={message.message}/>);
    let newMessageBody = state.newMessageText;

    let onSendMessageCLick = () => {
        props.store.dispatch(sendMessageCreater());
    };

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreater(body));
    };

    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {dialogsItems}
                </div>

                <div className={style.messages}>
                    <div>{messagesItems}</div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            placeholder={'Enter you message'}
                            onChange={onNewMessageChange}
                        />
                        <br/>
                        <button onClick={onSendMessageCLick}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;