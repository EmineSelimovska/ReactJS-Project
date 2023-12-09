import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import { formRegister } from "../../utils/formRegister";
import { useState } from "react";
import { toast } from "react-toastify";

const RegisterFormKeys = {
  Email: 'email',
  Username: 'username',
  Password: 'password',
  ConfirmPassword: 'confirm-password'
}

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const [forValues, setFomValues] = useState(formRegister);
  const [errors, setErrors] = useState({});


  const resetHandler = () => {
    setFomValues(formRegister);
    setErrors({});
  }

  function validateEmail(email) {
    const emailRegex = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    return emailRegex.test(email);

  }

  const validEmail = () => {
    if (!validateEmail(values.email)) {
      setErrors(state => ({
        ...state,
        email: 'Email is invalid '
      }))
    } else {
      if (errors.email) {
        setErrors(state => ({ ...state, email: '' }));
      }
    }
  }
  const validUsername = () => {
    if (values.username.length < 5) {
      setErrors(state => ({
        ...state,
        username: 'Username is too short! '
      }))
    } else {
      if (errors.username) {
        setErrors(state => ({ ...state, username: '' }));
      }
    }
  }
  const validPassword = () => {
    if (values.password.length < 6) {
      setErrors(state => ({
        ...state,
        password: 'Password is too short! '
      }))
    } else {
      if (errors.password) {
        setErrors(state => ({ ...state, password: '' }));
      }
    }
  }

  const validConfirmPass = () => {
    if (values.confirmPass != values.password) {
      setErrors(state => ({
        ...state,
        confirmPass: "Password don't match!"

      }))
    } else {
      if (errors.confirmPass) {
        setErrors(state => ({ ...state, confirmPass: '' }));
        toast.error()
      }
    }
  }



  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, forValues)

  return (
    <section id="aa-signin">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="aa-signin-area">
              <div className="aa-signin-form">
                <div className="aa-signin-form-title">
                  <Link className="aa-property-home" to="/">Home</Link>
                  <h4>Create your account and Stay with us</h4>
                </div>
                <form className="contactform" onSubmit={onSubmit}>
                  <div className="aa-single-field">
                    <label htmlFor="username">Name <span className="required">*</span></label>
                    <input
                      type="text"
                      required="required"
                      aria-required="true"
                      values={values.username}
                      id="username"
                      name="username"
                      onChange={onChange}
                      onBlur={validUsername}
                    />
                    {errors.username && (
                      <p>{errors.username}</p>
                    )}
                  </div>
                  <div className="aa-single-field">
                    <label htmlFor="email">Email <span className="required">*</span></label>
                    <input
                      type="email"
                      required="required"
                      aria-required="true"
                      values={values.email}
                      id="email"
                      name="email"
                      onChange={onChange}
                      onBlur={validEmail} />
                    {errors.email && (
                      <p>{errors.email}</p>
                    )}
                  </div>
                  <div className="aa-single-field">
                    <label htmlFor="password">Password <span className="required">*</span></label>
                    <input
                      type="password"
                      id="password"
                      values={values.password}
                      name="password"
                      onChange={onChange}
                      onBlur={validPassword} />
                    {errors.password && (
                      <p >{errors.password}</p>
                    )}
                  </div>
                  <div className="aa-single-field">
                    <label htmlFor="cnfirmPass">Confirm Password <span className="required">*</span></label>
                    <input
                      type="password"
                      id="confirmPass"
                      values={values.confirmPass}
                      name="confirmPass"
                      onChange={onChange}
                      onBlur={validConfirmPass} />
                    {errors.confirmPass && (
                      <p>{errors.confirmPass}</p>
                    )}
                  </div>
                  <button className="aa-single-submit" type="submit"
                    disabled={(Object.values(errors).some(x => x)
                      || (Object.values(values).some(x => x == '')))}
                  >Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}