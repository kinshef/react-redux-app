import React from 'react';
import s from './login.module.css';
import {reduxForm} from "redux-form";
import {createField, Input} from "../../utilit/FormControls/FormsControls";
import {required} from "../../utilit/validators";
import {AuthLogin} from "../../redux/auth-reduser";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


let LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className={props.error && 'formError'}>
            {props.error && <span>{props.error}</span>}
            {createField(Input, "Login", [required], "Login")}
            {createField(Input, "Password", [required], "Password", {type: "password"})}
            {createField("input", "rememberMe", [], "", {type: "checkbox"} ,"remember me")}

            {props.captchaUrl &&
            <>
                <img src={props.captchaUrl}/>
                {createField(Input, "captcha", [required], "captcha")}
            </>}

            <div><button>login</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

let Login = (props) => {
    const onSubmit = (formData) => {
        props.AuthLogin(formData.Login, formData.Password, formData.rememberMe, formData.captcha)
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div className={s.login} >
            <h5>Login</h5>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
};

export default connect(mapStateToProps, {AuthLogin})(Login);