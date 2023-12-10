import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm"
import { useContext, useState } from "react";
import AuthContext from "../../contexts/authContext";

const formLogin = {
    email: '',
    password: '',
};


export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext)
    const [forValues, setFomValues] = useState(formLogin);
   
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

     const { values, onChange, onSubmit } = useForm(loginSubmitHandler, forValues);
    return (
        <><section id="aa-signin">
            <div className="container" style={{ padding: '5em' }}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="aa-signin-area">
                            <div className="aa-signin-form">
                                <div className="aa-signin-form-title">
                                    <Link className="aa-property-home" to="/">Home</Link>
                                    <h4>Sign in to your account</h4>
                                </div>
                                <form className="contactform" onSubmit={onSubmit}>
                                    <div className="aa-single-field">
                                        <label htmlFor="email">Email <span className="required">*</span></label>
                                        <input
                                            type="email"
                                            required="required"
                                            id="email"
                                            name="email"
                                            onChange={onChange}
                                            value={values.email}
                                            onBlur={validEmail} />
                                        {errors.email && (
                                            <p >{errors.email}</p>
                                        )}
                                    </div>
                                    <div className="aa-single-field">
                                        <label htmlFor="password">Password <span className="required">*</span></label>
                                        <input
                                            type="password"
                                            id="password-login"
                                            name="password"
                                            onChange={onChange}
                                            value={values.password}
                                            onBlur={validPassword} />
                                            {errors.password && (
                                            <p >{errors.password}</p>
                                        )}
                                    </div>
                                    <div className="aa-single-submit">
                                        <input type="submit" value="Login" className="aa-browse-btn" name="Submit" />
                                        <p>Don't Have A Account Yet? <Link to="/register">CREATE NOW!</Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}