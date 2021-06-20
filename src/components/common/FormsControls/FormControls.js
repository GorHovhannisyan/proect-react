import React from "react";
import { Field } from "redux-form";
import styles from "./FormsControls.module.css";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")} >
            <div>
                {children} 
            </div>
            {hasError && <span>{error}</span>}
            
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restprops} = props
    return <FormControl {...props} ><textarea {...input} {...restprops} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restprops} = props
    return <FormControl {...props} ><input {...input} {...restprops} /></FormControl>
}

export const createField = (placeholder, name, component, validators, props = {}, text= "") => (
    <div>
        <Field placeholder={placeholder} name={name} 
           component={ component} validate={ validators} 
           {...props} /> {text}
    </div>
    
)