import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsItems = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesItems = props.state.messages.map(message => <Message message={message.message}/>);
    let newMessageElement = React.createRef();

    let addNewMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    };

    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {dialogsItems}
                </div>

                <div className={style.messages}>
                    {messagesItems}
                    <div>
                        <textarea ref={newMessageElement}>
                        </textarea>
                        <br/>
                        <button onClick={addNewMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;