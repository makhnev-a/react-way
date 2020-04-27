import React from "react";
import {sendMessageCreater, updateNewMessageBodyCreater} from '../../redux/dialogs.reducer';
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onSendMessageCLick = () => {
        props.store.dispatch(sendMessageCreater());
    };

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreater(body));
    };

    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageCLick}
            dialogsPage={state}
        />
    );
};

export default DialogsContainer;