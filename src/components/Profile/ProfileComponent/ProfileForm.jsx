import React from 'react';
import style from '../Profile.module.css';
import {createField, Input} from "../../../utilit/FormControls/FormsControls";
import {reduxForm} from "redux-form";


let ProfileForm = ({profile: {contacts}, profileUpdateStatus, handleSubmit, error}) => {
    const normalizeBoolean = value => {
        if (value === "true") {return true;}
        if (value === "false") {return false;}
        return value;
    };
    return (
        <form onSubmit={handleSubmit} className={error && 'formError'}>
            <div>{!profileUpdateStatus
                ? <button>save</button>
                : <button>end</button>}
            </div>
            {error && <span>{error}</span>}
            {Object.keys(contacts).map((p) =>
                <div key={p} className={style.soshialwrap}>
                    <p>{p}</p>
                    {createField(Input, `contacts.${p}`, [], p)}
                </div>
            )}
            <div>
                <span>обо мне</span>
                {createField(Input, `aboutMe`, [], 'обо мне ')}
            </div>
            {createField("input", "lookingForAJob", [], "", {
                type: "radio", value: true, normalize: normalizeBoolean}, "Есть работа")}
            {createField("input", "lookingForAJob", [], "", {
                type: "radio", value: false, normalize: normalizeBoolean}, "Нет работа")}
            <div>
                <span>Описание работы</span>
                {createField(Input, "lookingForAJobDescription", [], "")}
            </div>
            <div>
                <span>Полное имя</span>
                {createField(Input, `fullName`, [])}
            </div>
        </form>
    );
};

const ProfileFormRF = reduxForm({form: 'edit-profile'})(ProfileForm)

export default ProfileFormRF;