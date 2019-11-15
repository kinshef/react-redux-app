import React from 'react';
import './FormControls.css';
import {Field} from "redux-form";

const FormsControls = ({input, meta: {touched, error}, children}) => {
    return (
        <>
            {touched && error && <span className={'error'}>{error}</span>}
            {children}
        </>
    )
}

export const Input = (props) => {
    const {input, meta: {touched, error}, ...restProps} = props;
    return <FormsControls {...props} >
        <input className={touched && error ? 'inputError' : ''} {...input} {...restProps} />
    </FormsControls>
}

export const Textarea = (props) => {
    const {input, meta: {touched, error}, ...restProps} = props;
    return <FormsControls {...props} >
        <textarea className={touched && error ? 'inputError' : ''} {...input} {...restProps} />
    </FormsControls>
}

export let createField = (component, name, validate, placeholder, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder}
               name={name} component={component}
               validate={validate} {...props}/>
        {text ? <span>{text}</span> : null}
    </div>
)
