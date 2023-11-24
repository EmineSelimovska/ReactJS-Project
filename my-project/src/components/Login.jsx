import { Link } from "react-router-dom";
import useForm from "../hooks/useForm"
import { useContext } from "react";
import AuthContext from "../contexts/authContext";

const LoginFormKyes = {
    Email: 'email',
    Password: 'password',
};


export default function Login() {
    
    const { loginSubmitHandler } = useContext(AuthContext)
    const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
        [LoginFormKyes.Email]: '',
        [LoginFormKyes.Password]: '',
    });
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
                                        name={LoginFormKyes.Email}
                                        onChange={onChange}
                                        value={values[LoginFormKyes.Email]}/>
                                    </div>
                                    <div className="aa-single-field">
                                        <label htmlFor="password">Password <span className="required">*</span></label>
                                        <input 
                                        type="password" 
                                        id="password-login"
                                        name={LoginFormKyes.Password}
                                        onChange={onChange}
                                        value={values[LoginFormKyes.Password]}/>
                                    </div>
                                    <div className="aa-single-submit">
                                        <input type="submit" value="Send Message" className="aa-browse-btn" name="Submit" />
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