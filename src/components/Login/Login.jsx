import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth.reducer";

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
                    // type={'password'}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    name={'rememberMe'}
                    type="checkbox"
                /> remember me
            </div>
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

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default connect(null, {
    login
})(Login);