import React from 'react';
import style from './login.module.css';
import {reduxForm} from "redux-form";
import {createField, Input} from "../../utilit/FormControls/FormsControls";
import {required} from "../../utilit/validators";
import {AuthLogin} from "../../redux/auth-reduser";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {getCaptchaUrl, getIsAuth} from "../../redux/selectors/auth-selectors";


let LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return(
        <form onSubmit={handleSubmit} className={error && 'formError'}>
            {error && <span>{error}</span>}
            {createField(Input, "Login", [required], "Login")}
            {createField(Input, "Password", [required], "Password", {type: "password"})}
            {createField("input", "rememberMe", [], "", {type: "checkbox"} ,"remember me")}

            {captchaUrl &&
            <>
                <img  alt='' src={captchaUrl}/>
                {createField(Input, "captcha", [required], "captcha")}
            </>}

            <div><button>login</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

let Login = ({AuthLogin, isAuth, captchaUrl}) => {
    const onSubmit = (formData) => {
        AuthLogin(formData.Login, formData.Password, formData.rememberMe, formData.captcha)
    }

    if(isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div className={style.login} >
            <h5>Login</h5>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return{
        isAuth: getIsAuth(state),
        captchaUrl: getCaptchaUrl(state)
    }
};

export default connect(mapStateToProps, {AuthLogin})(Login);