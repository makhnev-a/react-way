import React from "react";
import styles from './FormControls.module.css';
import {requiredField} from "../../../utils/validators/validators";
import {Field} from "redux-form";

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;

    return (
        <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
    );
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;

    return (
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    );
};

export const createField = (component, name, placeholder, validators, props = {}, text = '') => (
    <div>
        <Field
            component={component}
            name={name}
            placeholder={placeholder}
            validate={validators}
            {...props}
        /> {text}
    </div>
);