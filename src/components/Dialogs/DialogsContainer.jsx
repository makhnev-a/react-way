import React from "react";
import {sendMessageCreater, updateNewMessageBodyCreater} from '../../redux/dialogs.reducer';
import Dialogs from "./Dialogs";
import Context from '../../StoreContext';

const DialogsContainer = (props) => {
    return (
        <Context.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;

                    let onSendMessageCLick = () => {
                        store.dispatch(sendMessageCreater());
                    };

                    let onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyCreater(body));
                    };

                    return (
                        <Dialogs
                            updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageCLick}
                            dialogsPage={state}
                        />
                    );
                }
            }
        </Context.Consumer>
    );
};

export default DialogsContainer;