import React from 'react';
import s from './Message.module.css';
import DialogItems from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utilit/validators";
import {Input} from "../../utilit/FormControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const AddMessageForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <Field placeholder={"New text"} name={"newMessage"} component={Input} validate={[required, maxLength10]}/>
            <button>add post</button>
        </form>
    )
}

const NewMassageText = reduxForm({form: 'newMessage'})(AddMessageForm)

let Message = (props) => {
    let dialogsElement = props.messagesPage.dialogsData.map((even) => <DialogItems id={even.id} key={even.id} user={even.name}/>)
    let messagesElement = props.messagesPage.messagesData.map((even) => <Messages id={even.id} key={even.id} messages={even.messages}/>)

    const addNewMessage = (value) => {
        props.addMassage(value.newMessage)
    }

    return (
        <div className={s.Message}>
            <p>Message</p>
            <div className={s.container}>
                <div className={s.dialogsItems}>
                    <ul>
                        {dialogsElement}
                    </ul>
                </div>
                <div className={s.messages}>
                    {messagesElement}
                    <NewMassageText onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    );
};



export default Message;