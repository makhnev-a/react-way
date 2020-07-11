import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth.reducer";
import {Redirect} from "react-router-dom";
import style from './../common/FormControls/FormControls.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Input}
                    name={'email'}
                    placeholder={'Login'}
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    name={'password'}
                    placeholder={'Password'}
                    validate={[requiredField]}
                    type={'password'}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    name={'rememberMe'}
                    type="checkbox"
                /> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
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