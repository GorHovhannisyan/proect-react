import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { required } from "../../utils/validators/validators";
import { createField, Input } from "../common/FormsControls/FormControls";
import style from "./../common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error}) => {
    return (
      <form onSubmit={handleSubmit}>
          {createField("Email", "email", Input, [ required])}
        { /* <div>             
               <Field placeholder={"Email"} name={"email"} component={Input}
                     validate={[ required]} />  
          </div> */}
          {createField("Password", "password", Input, [ required], {type:"password"})}
        { /*  <div>
          <Field placeholder={"Password"} name={"password"} type={"password"} component={Input}
                 validate={[ required]} />
          </div> */ }
          {createField(null,"rememberMe", Input, [], {type:"Checkbox"}, "remember me")}
        { /*  <div>
          <Field type={"Checkbox"} name={"rememberMe"} component={Input} /> remember me
          </div> */ }
          {error && <div className={style.formSummaryError}>
              {error}
          </div>
          }
          <div>
              <button>Login</button>
          </div>
      </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);