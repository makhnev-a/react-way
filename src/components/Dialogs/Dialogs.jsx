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
    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    <DialogItem name={'Dimych'} id={1}/>
                    <DialogItem name={'Andrey'} id={2}/>
                    <DialogItem name={'Sveta'} id={3}/>
                    <DialogItem name={'Sasha'} id={4}/>
                    <DialogItem name={'Viktor'} id={5}/>
                    <DialogItem name={'Valera'} id={6}/>
                </div>

                <div className={style.messages}>
                    <Message message={'Hello'}/>
                    <Message message={'How are you?'}/>
                    <Message message={'Yo'}/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;