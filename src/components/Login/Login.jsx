import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControls/FormControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth.reducer";
import {Redirect} from "react-router-dom";
import style from './../common/FormControls/FormControls.module.css';


const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField(Input, 'email', 'Login', [requiredField])}
            {createField(Input, 'password', 'Password', [requiredField], {type: 'password'})}
            {createField(Input, 'rememberMe', null, [], {type: 'checkbox'}, 'remember me')}

            {error && <div className={style.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => login(formData.email, formData.password, formData.rememberMe);

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    };
};

export default connect(mapStateToProps, {
    login
})(Login);