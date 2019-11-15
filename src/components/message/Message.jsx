import React from 'react';
import style from './Message.module.css';
import DialogItems from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utilit/validators";
import {Input} from "../../utilit/FormControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const AddMessageForm = ({handleSubmit}) => {
    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <Field placeholder={"New text"} name={"newMessage"} component={Input} validate={[required, maxLength10]}/>
            <button>add post</button>
        </form>
    )
}

const NewMassageText = reduxForm({form: 'newMessage'})(AddMessageForm)

let Message = ({dialogsData, messagesData, addMassage}) => {
    let dialogsElement = dialogsData.map((even) => <DialogItems id={even.id} key={even.id} user={even.name}/>)
    let messagesElement = messagesData.map((even) => <Messages id={even.id} key={even.id} messages={even.messages}/>)

    const addNewMessage = (value) => {
        addMassage(value.newMessage)
    }

    return (
        <div className={style.Message}>
            <p>Message</p>
            <div className={style.container}>
                <div className={style.dialogsItems}>
                    <ul>
                        {dialogsElement}
                    </ul>
                </div>
                <div className={style.messages}>
                    {messagesElement}
                    <NewMassageText onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    );
};



export default Message;