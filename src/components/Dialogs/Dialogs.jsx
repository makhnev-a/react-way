import React from "react";
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    );
};

const Dialogs = (props) => {
    let dialogsItems = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ];

    let messagesItems = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ];

    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    <DialogItem name={dialogsItems[0].name} id={dialogsItems[0].id}/>
                    <DialogItem name={dialogsItems[1].name} id={dialogsItems[1].id}/>
                </div>

                <div className={style.messages}>
                    <Message message={messagesItems[0].message}/>
                    <Message message={messagesItems[1].message}/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;